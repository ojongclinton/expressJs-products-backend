module.exports = (mongoose) => {
  const Product = mongoose.model(
    "products",
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean,
      },
      { timestamps: true }
    )
  );

  return Product;
};
