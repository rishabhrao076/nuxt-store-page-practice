<script setup>
const { data } = await useFetch('/api/test?name=Test', {
  method: 'post',
  body: { age: 30 },
});
console.log(data.value);
</script>
<template>
  <div>
    <p class="text-3xl font-bold mb-4">About</p>
    <p>
      {{ data.message }}
    </p>
  </div>
</template>
