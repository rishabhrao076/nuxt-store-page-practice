<script setup>
import ShoppingCartFill from '@/components/Icons/ShoppingCartFill.vue';
import ElectricBolt from '@/components/Icons/ElectricBolt.vue';
</script>
<template>
  <div class="flex justify-between gap-10 w-full">
    <button
      class="
        bg-amber-400
        rounded
        p-4
        flex-1
        text-center
        flex
        items-center
        justify-center
        gap-2
      "
    >
      <span class="flex items-center"><ElectricBolt /></span>
      Buy Now
    </button>
    <button
      class="
        bg-orange-500
        rounded
        p-4
        flex-1
        text-center
        flex
        items-center
        justify-center
        gap-2
      "
    >
      <span class="flex items-center"><ShoppingCartFill /></span>Add to Cart
    </button>
  </div>
</template>
