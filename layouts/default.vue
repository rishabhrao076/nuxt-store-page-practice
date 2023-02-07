<template>
  <header class="shadow-sm bg-white border-b">
    <nav class="container me-auto p-4 flex justify-between">
      <div>
        <img src="~/assets/full-logo-green-dark.svg" />
        <ul class="flex gap-3">
          <li>
            <NuxtLink to="/" class="hover:text-blue-500">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="hover:text-blue-500">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="hover:text-blue-500"
              >Products</NuxtLink
            >
          </li>
        </ul>
      </div>

      <span class="font-bold text-2xl">Generic Store</span>
    </nav>
  </header>
  <NuxtLoadingIndicator />
  <main class="w-screen h-screen bg-stone-50">
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </main>
</template>
