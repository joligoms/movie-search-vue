<template>
  <ModalDialog>
    <div
      class="
        flex-1 flex justify-center items-center min-h-[300px]
        bg-white rounded-lg overflow-hidden shadow-xl
      "
      role="dialog"
    >
      <LoadingIcon
        v-if="loading"
        class="animate-spin animate-pulse text-black"
      />
      <div
        v-else
        class="w-full"
      >
        <div class="relative">
          <div class="flex justify-end absolute top-0 w-full h-50 p-5 bg-gradient-to-b from-black via-neutral-900 via-10% to-transparent">
            <button
              class="text-white"
              @click="handleClose"
            >
              <XMarkIcon class="w-6" />
            </button>
          </div>
          <CardImage
            :image="movieDetails.Poster"
            image-class="max-h-65 object-contain"
          />
        </div>
        <div class="mx-10 py-10">
          <div>
            <h1 class="text-xl font-medium">
              {{ movieDetails.Title }}
            </h1>
            <h2 class="text-neutral-800 font-light">
              <span class="capitalize">{{ movieDetails.Type }}</span>
              by {{ movieDetails.Director !== 'N/A' ? movieDetails.Director : movieDetails.Writer }}
            </h2>
            <h3 class="font-thin">
              Release date:
              {{ movieDetails.Released }}
            </h3>
            <!-- TODO: fractional star rating :) -->
            <h3 class="font-thin">
              Rating:
              {{ movieRating }}
            </h3>
          </div>
          <hr class="my-4">
          <p class="indent-5 text-justify text-neutral-600">
            {{ movieDetails.Plot }}
          </p>
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
import { useRouter } from 'vue-router';
import { XMarkIcon } from '@heroicons/vue/24/solid';
import { computed } from 'vue';

const props = defineProps({
  movieId: {
    type: String,
    required: true,
  },
});

const { findMovie, movieDetails, loading } = useMovieAPI();

findMovie(props.movieId);

const router = useRouter();

function handleClose () {
  router.back();
}

const movieRating = computed(() => {
  if (
    Object.keys(movieDetails.value).length === 0 ||
    !movieDetails.value.Ratings ||
    movieDetails.value.Ratings.length === 0
  ) {
    return 'N/A';
  }

  return movieDetails.value.Ratings[0].Value;
})

</script>
