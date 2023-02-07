<script setup>
defineProps({
  error: Object,
});

const handleClearError = () => clearError({ redirect: '/' });
</script>
<template>
  <div class="grid items-center h-screen bg-stone-50">
    <div class="mt-7 max-w-sm mx-auto text-center border rounded py-5 px-[5%] bg-white">
      <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
      <p class="mt-7 text-6xl">Oops..</p>
      <p class="mt-7">{{ error.message }}</p>
      <button
        class="bg-blue-500 p-3 rounded text-white mt-7"
        @click="handleClearError"
      >
        Return to Home
      </button>
    </div>
  </div>
</template>
