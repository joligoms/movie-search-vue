<template>
  <div
    :class="[
      !error ? 'br-none' : 'bg-red-400 outline-8 outline-red-500 outline-dashed outline-offset-4',
      !error ? 'text-slate-400' : 'text-white',
      'p-20 rounded-2xl flex flex-col items-center gap-y-10'
    ]"
  >
    <component
      :is="statusIcon"
      class="w-10 h-10"
    />

    {{ statusTitle }}
  </div>
</template>

<script setup>
import { InformationCircleIcon, ExclamationCircleIcon } from '@heroicons/vue/24/solid';
import { computed } from 'vue';

const props = defineProps({
  statusTitle: {
    type: String,
    default: 'Unknown Status',
  },

  customIcon: {
    type: Object,
    default: null,
  },

  error: {
    type: Boolean,
    default: false,
  },
});

const statusIcon = computed(() => {
  if (props.customIcon) return props.customIcon;

  return !props.error ? InformationCircleIcon : ExclamationCircleIcon
});
</script>
