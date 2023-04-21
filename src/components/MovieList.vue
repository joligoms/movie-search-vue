<template>
  <div>
    <p>{{ fooText }}</p>
  </div>
</template>

<script setup>
defineProps({
  fooText: {
    type: String,
    default: ''
  },
})
</script>
