<template>
  <teleport to="body">
    <div
      class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
    >
      <div
        class="
          flex justify-stretch items-stretch
          min-h-screen
        "
      >
        <div class="relative w-full max-w-md m-auto">
          <slot />
        </div>
        <!-- <slot /> -->
      </div>
    </div>
  </teleport>
</template>

<script setup>
</script>
