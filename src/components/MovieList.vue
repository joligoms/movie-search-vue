<template>
  <div class="p-4">
    <LoadingIcon
      v-if="loading"
      class="animate-spin animate-pulse text-black"
    />
    <template v-else>
      <StatusBanner
        v-if="error || !hasResults"
        :error="error"
        :custom-icon="!error ? FaceFrownIcon : null"
        :status-title="error ?? 'No results found.'"
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
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import LoadingIcon from './LoadingIcon.vue';
import MovieCard from './MovieCard.vue';
import StatusBanner from './StatusBanner.vue';
import { FaceFrownIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  loading: {
    type: Boolean,
    required: true,
  },

  movies: {
    type: Array,
    default: null,
  },

  error: {
    type: String,
    default: null,
  },
})

const hasResults = computed(() => props.movies && !props.error && props.movies.length > 0);

</script>
