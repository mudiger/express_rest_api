const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "Welcome to the API" });
});

router.post("/", (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };
  res
    .status(201)
    .json({ message: "Welcome to the POST API", createdProduct: product });
});

module.exports = router;
