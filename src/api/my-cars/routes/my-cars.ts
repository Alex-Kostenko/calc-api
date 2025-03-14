export default {
  routes: [
    {
      method: "GET",
      path: "/my-cars",
      handler: "my-cars.index",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
