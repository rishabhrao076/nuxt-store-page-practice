<script setup>
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;

const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product Not found',
    fatal: true,
  });
}
</script>
<template>
  <!-- Adding Head Title and meta tags via Nuxt's inbuild components -->
  <Head>
    <Title>Product - {{ product.title }} </Title>
    <Meta name="description" :content="product.description" />
  </Head>
  <ProductDetails :product="product">
    <template #underImage>
      <BuyButtonGroup />
    </template>
  </ProductDetails>
</template>
