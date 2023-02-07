export default defineEventHandler(async (event) => {
  //handle query params
  // const { name } = getQuery(event);

  // handle post data
  // const { age } = await readBody(event);

  const message = `Hi my name is Rishabh and I built this generic e-commerce store page using Nuxt 3 and fakestoreapi. This mini project was built to learn and practice the features of Nuxt 3, and I have to say that I am very Impressed by the meta framework and the Developer Experience it provides. There is also support for several modules to extend our Nuxt app as well as several rendering methods available such as SSR, CSR and SSG`;

  return {
    message: message,
  };
});
