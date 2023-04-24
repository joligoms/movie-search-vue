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
      loading.value = true;
      alreadyRequested.value = true;

      const response = await getFetchWithQuery({
        s: searchText,
        v: 1, // Stick to the API version, avoiding problems in the future.
      });

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

  function getFetchWithQuery (queryParams) {
    return fetch(`${API_URL}?${new URLSearchParams({
      apikey: API_KEY,
      ...queryParams,
    })}`);
  }

  return {
    // functions
    searchMovies,

    // states
    searchResults,
    totalResults,
    alreadyRequested,
    movieDetails,
    loading,
    error,
  };
}
