module.exports = (mongoose) => {
  const Product = mongoose.model(
    "products",
    mongoose.Schema(
      {
        name: String,
        imageUrl: String,
        amount: Number,
        currency: String,
      },
      { timestamps: true }
    )
  );

  return Product;
};
