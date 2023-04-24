<template>
  <header class="bg-white flex flex-col">
    <h1 class="text-1xl font-bold">
      {{ title }}
    </h1>
    <div>
      <slot />
    </div>
  </header>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      default: 'Header Title',
    },
  })

</script>
