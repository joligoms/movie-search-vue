<template>
  <div
    v-if="!image"
    :class="[
      imageClass,
      'bg-slate-200 flex justify-center items-center'
    ]"
  >
    <FilmIcon class="w-12 text-white" />
  </div>
  <img
    v-else
    :draggable="false"
    oncontextmenu="return false"
    :class="['object-cover w-full', imageClass]"
    :src="image"
  >
</template>

<script setup>
import { FilmIcon } from '@heroicons/vue/24/solid';

defineProps({
  image: {
    type: String,
    default: null,
  },
  imageClass: {
    type: String,
    default: 'object-cover w-full',
  }
});

</script>
