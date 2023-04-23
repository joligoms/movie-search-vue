<template>
  <div class="flex-col">
    <CardImage :image="image" />
    <div>
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script setup>
import CardImage from './CardImage.vue';

defineProps({
    title: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        default: null,
    }
});

</script>
