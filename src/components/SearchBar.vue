<template>
  <input
    type="text"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  >
</template>

<script setup>
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

defineEmits(['update:modelValue']);

</script>
