import { ref } from 'vue';

const API_URL = 'http://omdbapi.com';
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export default function useMovieAPI () {
  const searchResults = ref();
  const totalResults = ref(0);
  const alreadyRequested = ref(false);
  const movieDetails = ref({});
  const loading = ref(false);
  const error = ref(null);

  async function searchMovies (searchText) {
    try {
      if (!searchText) return;

      loading.value = true;
      alreadyRequested.value = true;

      const response = await getFetchWithQuery({ s: searchText });

      const data = await response.json();

      if (data.Response === "True") {
        searchResults.value = data.Search;
        totalResults.value = data.totalResults;

      } else {
        searchResults.value = [];

        if (data.Error !== 'Movie not found!') { // I prefer to not handle the absence of results as an "error".
          error.value = data.Error;
        }
      }

    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  async function findMovie (imdbID) {
    try {
      loading.value = true;

      const response = await getFetchWithQuery({ i: imdbID });

      const data = await response.json();

      if (data.Response === "True") {
        movieDetails.value = data;

      } else {
        movieDetails.value = null;
        error.value = data.Error;
      }

    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  // TODO: create useFetch composable
  function getFetchWithQuery (queryParams) {
    return fetch(`${API_URL}?${new URLSearchParams({
      apikey: API_KEY,
      v: 1, // Stick to the API version, avoiding problems in the future.
      ...queryParams,
    })}`);
  }

  return {
    // functions
    searchMovies,
    findMovie,

    // states
    searchResults,
    totalResults,
    alreadyRequested,
    movieDetails,
    loading,
    error,
  };
}
