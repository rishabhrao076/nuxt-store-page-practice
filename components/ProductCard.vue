<script setup>
defineProps({
  product: Object,
});
</script>
<template>
  <div class="border rounded-xl shadow text-center p-4 h-full bg-white">
    <NuxtLink :to="`products/${product.id}`" class="flex flex-col items-center">
      <img :src="product.image" alt="product-image" class="max-h-[120px]" />
      <p
        class="
          font-bold
          text-gray-500
          mt-4
          mx-4
          max-h-7
          w-2/3
          md:w-full
          truncate
        "
      >
        {{ product.title }}
      </p>
    </NuxtLink>
  </div>
</template>
