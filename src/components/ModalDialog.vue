<template>
  <teleport to="body">
    <div
      class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
    >
      <div
        class="
          flex justify-stretch items-stretch
          min-h-screen
          px-4 py-8
          sm:px-8 sm:py-16
        "
      >
        <slot />
      </div>
    </div>
  </teleport>
</template>
