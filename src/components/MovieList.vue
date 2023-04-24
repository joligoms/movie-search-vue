<template>
  <div class="p-4">
    <LoadingIcon
      v-if="loading"
      class="animate-spin animate-pulse text-black"
    />
    <div
      v-else
      class="grid grid-cols-2 gap-2"
    >
      <MovieCard
        v-for="movie in movies"
        :key="movie.imdbID"
        :title="movie.Title"
        :image="movie.Poster"
        :type="movie.Type"
        :year="movie.Year"
      />
    </div>
  </div>
</template>

<script setup>
import LoadingIcon from './LoadingIcon.vue';
import MovieCard from './MovieCard.vue';

defineProps({
  loading: {
    type: Boolean,
    required: true,
  },

  movies: {
    type: Array,
    default: null,
  },
})
</script>
