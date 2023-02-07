<script setup>
// Head and meta tags
useHead({
  title: 'My App - Products',
  meta: [{ name: 'description', content: 'Products via fakestoreapi' }],
});

// fetching prducts from the fakestore api
//destructuring the data variable from the await useFetch and setting a name for the property
// as products to use in the template
const { data: products } = await useFetch('https://fakestoreapi.com/products');
console.log(products.value);
</script>
<template>
  <p class="text-3xl font-bold m-4">Products Page</p>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
    <ProductCard v-for="product in products" :product="product" />
  </div>
</template>
