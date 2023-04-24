<template>
  <ModalDialog>
    <div
      class="flex-1 bg-white rounded-lg text-left overflow-hidden shadow-xl p-10"
      role="dialog"
    >
      <LoadingIcon v-if="loading" />
      <div v-else>
        <CardImage
          :image="movieDetails.Poster"
          image-class="max-h-65 object-contain"
        />
        <div>
          <h1 class="text-xl font-medium">
            {{ movieDetails.Title }}
          </h1>
          <h2>
            <span class="capitalize">{{ movieDetails.Type }}</span>
            by {{ movieDetails.Director }}
          </h2>
        </div>
      </div>
    </div>
  </ModalDialog>
</template>
<script setup>
import LoadingIcon from './LoadingIcon.vue';
import ModalDialog from './ModalDialog.vue';
import useMovieAPI from '../composables/useMovieAPI';
import CardImage from './CardImage.vue';

const props = defineProps({
  movieId: {
    type: String,
    required: true,
  },
});

const { findMovie, movieDetails, loading, error } = useMovieAPI();

findMovie(props.movieId);

</script>
