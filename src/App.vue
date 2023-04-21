<template>
  <!-- Doing mobile-first -->
  <div class="min-h-screen w-screen flex flex-col">
    <PageHeader
      class="items-center gap-y-4 py-4"
      title="Movie Search"
    >
      <SearchBar
        v-model="newMovieSearch"
        class="border rounded-lg outline-2 focus:outline-dashed focus:outline-red-400 px-4 py-1"
        placeholder="Search for movies 🍿..."
      />
    </PageHeader>
    <main class="flex flex-grow items-center justify-center">
      <MovieList :foo-text="newMovieSearch" />
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
  </div>
</template>

<script setup>
import MovieList from './components/MovieList.vue'
import PageFooter from './components/PageFooter.vue';
import PageHeader from './components/PageHeader.vue';
import SearchBar from './components/SearchBar.vue';

import { ref } from 'vue'

const newMovieSearch = ref('');

</script>

<style scoped>


</style>
