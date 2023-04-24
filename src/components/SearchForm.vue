<template>
  <form
    class="flex"
    @submit.prevent="$emit('search', modelValue)"
  >
    <div class="relative">
      <input
        class="border rounded-l-lg outline-2 focus:outline-dashed focus:outline-red-400 px-4 py-1"
        type="text"
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      >
      <div
        v-if="modelValue"
        class="absolute inset-y-0 right-0 px-1 flex items-center cursor-pointer hover:text-neutral-600"
        @click="$emit('clear')"
      >
        <XMarkIcon class="w-5 h-5" />
      </div>
    </div>
    <button
      class="border rounded-r-lg outline-2 px-4 py-1 bg-black text-white hover:bg-neutral-600"
      type="submit"
      @click="search"
    >
      <MagnifyingGlassIcon class="w-6 h-6" />
    </button>
  </form>
</template>

<script setup>
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/24/solid';

defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: () => 'Find what you need'
  }
});

defineEmits(['update:modelValue', 'search', 'clear']);

</script>
