module.exports = (app) => {
  const products = require("./app/controllers/products.controller");

  var router = require("express").Router();

  // Create a new Product
  router.post("/", products.create);

  // Retrieve all products
  router.get("/", products.findAll);

  // Retrieve all published products
  router.get("/currency", products.findByCurrency);

  // Retrieve a single Product with id
  router.get("/:id", products.findOne);

  // Update a Product with id
  router.put("/:id", products.update);

  router.get("/create/:amount", products.populate);

  // Delete a Product with id
  router.delete("/:id", products.delete);

  // Delete all products
  router.delete("/", products.deleteAll);

  app.use("/api/products", router);
};
