<script setup>
defineProps({
  product: Object,
});
</script>
<template>
  <div class="grid grid-cols-2 gap-10">
    <div class="flex flex-col items-center justify-center border bg-white p-7">
      <img :src="product.image" alt="product-img" class="my-7 max-w-[400px]" />
      <slot name="underImage" />
    </div>
    <div class="p-7">
      <h2 class="text-4xl my-7">{{ product.title }}</h2>
      <p class="text-xl my-7">Price - ${{ product.price }}</p>
      <h3 class="font-bold border-b-2 mb-2 pb-2">Product description:</h3>
      <p class="mb-7">{{ product.description }}</p>
    </div>
  </div>
</template>
