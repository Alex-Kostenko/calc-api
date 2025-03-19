export const validateNotNull = (data, fields) => {
  if (!Array.isArray(fields)) {
    fields = [fields]; // Convert single string to an array
  }

  const errors = fields
    .filter(
      (field) => (field in data && data[field] === null) || !(field in data)
    )
    .map((field) => ({
      path: [field],
      message: `Поле '${field}' обов'язкове для заповнення`,
      name: "ValidationError",
    }));

  if (errors.length > 0) {
    const ctx = strapi.requestContext.get();
    ctx.throw(400, {
      details: { errors },
      message: "Поле обов'язкове для заповнення",
      name: "ValidationError",
    });
  }
};
