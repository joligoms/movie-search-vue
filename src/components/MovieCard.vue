<template>
  <div
    class="
      flex flex-col cursor-pointer
      rounded-lg overflow-hidden
      bg-white drop-shadow-lg
      transition ease-in-out delay-100 duration-300
      hover:scale-105 hover:brightness-95
    "
  >
    <CardImage
      :image="image"
      image-class="
        h-60
        object-cover
        hover:object-scale-down
      "
    />
    <div
      class="
        flex flex-col justify-stretch
        flex-grow relative p-2
        text-left text-black
        h-25 min-h-25 max-h-25
      "
    >
      <div class="flex flex-col gap-y-2">
        <h2 class="text-base line-clamp-2 font-medium">
          {{ title }}
        </h2>
        <hr>
      </div>
      <div class="flex flex-col flex-grow py-2 gap-x-2 justify-end text-gray-600">
        <p v-if="year">
          {{ year }}
        </p>
        <p class="flex flex-row gap-1 items-center capitalize">
          <component
            :is="typeIcon"
            class="w-5 h-5"
          />
          {{ type }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { FilmIcon, TvIcon, PuzzlePieceIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/solid';
import CardImage from './CardImage.vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: null,
    },
    year: {
      type: [Number, String],
      default: null,
    },
    type: {
      type: String,
      default: 'Unknown',
    },
});

const typeIcon = computed(() => {
  switch (props.type) {
    case 'movie':
      return FilmIcon;

    case 'series':
      return TvIcon;

    case 'episode':
      return TvIcon;

    case 'game':
      return PuzzlePieceIcon;

    default:
      return QuestionMarkCircleIcon
  }
})

</script>
