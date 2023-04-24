<template>
  <!-- Doing mobile-first -->
  <div class="min-h-screen w-screen flex flex-col">
    <PageHeader
      class="items-center gap-y-4 py-4 sticky top-0 z-10"
      title="Movie Search"
    >
      <SearchForm
        v-model="newMovieSearch"
        placeholder="Search for movies 🍿..."
        @search="searchMovies(newMovieSearch)"
        @clear="newMovieSearch = null"
      />
    </PageHeader>
    <main class="flex flex-col bg-gray-100 flex-grow items-center justify-center">
      <StatusBanner
        v-if="!alreadyRequested"
        status-title="Search for any movies!"
        :custom-icon="MagnifyingGlassIcon"
      />
      <MovieList
        v-else
        :loading="loading"
        :movies="searchResults"
        :error="error"
        @view-movie="viewMovie"
      />
    </main>
    <PageFooter
      class="p-4 bg-black text-slate-300 text-center"
    >
      <p>
        Made with ❤️ by
        <a
          href="http://github.com/joligoms"
          class="text-blue-300"
          target="_blank"
        >@joligoms</a>
      </p>
    </PageFooter>
    <router-view name="MovieDialog" />
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import MovieList from './components/MovieList.vue'
import PageFooter from './components/PageFooter.vue';
import PageHeader from './components/PageHeader.vue';
import SearchForm from './components/SearchForm.vue';
import StatusBanner from './components/StatusBanner.vue';
import useMovieAPI from './composables/useMovieAPI';
import { useRouter } from 'vue-router';
import { ref } from 'vue'

const {
    searchMovies,
    searchResults,
    alreadyRequested,
    loading,
    error,
} = useMovieAPI();

const router = useRouter();

const newMovieSearch = ref('');

function viewMovie (movieId) {
  router.push({
    name: 'movie-details',
    params: { movieId },
  })
}

</script>
