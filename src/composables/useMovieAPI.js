import { ref, toRaw, watch } from 'vue';

const API_URL = 'http://omdbapi.com';
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export default function useMovieAPI () {
  const searchResults = ref([
    {
      "Title": "The Lord of the Rings: The Fellowship of the Ring",
      "Year": "2001",
      "imdbID": "tt0120737",
      "Type": "movie",
      "Poster": ""
    },
    {
      "Title": "The Lord of the Rings: The Return of the King",
      "Year": "2003",
      "imdbID": "tt0167260",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      "Title": "The Lord of the Rings: The Two Towers",
      "Year": "2002",
      "imdbID": "tt0167261",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      "Title": "The Lord of the Rings: The Rings of Power",
      "Year": "2022–",
      "imdbID": "tt7631058",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTg3NjcxYzgtYjljNC00Y2I2LWE3YmMtOTliZTkwYTE1MmZiXkEyXkFqcGdeQXVyNTY4NDc5MDE@._V1_SX300.jpg"
    },
    {
      "Title": "The Lord of the Rings",
      "Year": "1978",
      "imdbID": "tt0077869",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "The Lord of the Rings: The Two Towers",
      "Year": "2002",
      "imdbID": "tt0347436",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODI0Mzk3OTM4N15BMl5BanBnXkFtZTgwMTM4MTk4MDE@._V1_SX300.jpg"
    },
    {
      "Title": "The Lord of the Rings: The Return of the King",
      "Year": "2003",
      "imdbID": "tt0387360",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5NTQwMTY5MV5BMl5BanBnXkFtZTgwODcwNjUwMTE@._V1_SX300.jpg"
    },
    {
      "Title": "The Lord of the Rings: The Battle for Middle-Earth",
      "Year": "2004",
      "imdbID": "tt0412935",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYWI5ODU0ZGEtYTA4YS00YzliLWJiZjEtYThkNTBkNTY1Y2FhXkEyXkFqcGdeQXVyNDAzNzA0MzE@._V1_SX300.jpg"
    },
    {
      "Title": "The Lord of the Rings: The Battle for Middle-Earth II",
      "Year": "2006",
      "imdbID": "tt0760172",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTFlNTg5NzgtZmUyNS00MWJjLWFmNDktZmNiODEzZWY2YjgwXkEyXkFqcGdeQXVyNDAzNzA0MzE@._V1_SX300.jpg"
    },
    {
      "Title": "The Lord of the Rings: The Battle for Middle-earth II - The Rise of the Witch-king",
      "Year": "2006",
      "imdbID": "tt1058040",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjYwMDIxNjg3MV5BMl5BanBnXkFtZTgwMTk5MTE4MDE@._V1_SX300.jpg"
    }
  ]);
  const totalResults = ref(0);
  const movieDetails = ref({});
  const loading = ref(false);
  const error = ref(null);

  watch(searchResults, () => console.log(toRaw(searchResults.value)));

  async function searchMovies (searchText) {
    try {
      loading.value = true;

      const response = await getFetchWithQuery({s: searchText});
      const data = await response.json();

      if (data.Response === "True") {
        searchResults.value = data.Search;
        totalResults.value = data.totalResults;

      } else {
        searchResults.value = [];
        error.value = data.Error;
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
    movieDetails,
    loading,
    error,
  };
}
