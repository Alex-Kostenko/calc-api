export default {
  routes: [
    {
      method: "GET",
      path: "/currency",
      handler: "currency.index",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
