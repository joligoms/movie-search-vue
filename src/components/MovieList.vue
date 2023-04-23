<template>
  <div>
    <LoadingIcon
      v-if="loading"
      class="animate-spin animate-pulse text-black"
    />
    <MovieCard
      v-for="movie in movies"
      v-else
      :key="movie.imdbID"
      :title="movie.Title"
      :image="movie.Poster"
    />
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
