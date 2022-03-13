const { body, validationResult } = require("express-validator");

exports.productValidator = [
  body("name", "Name is required").not().isEmpty(),
  body("price", "Price is required").not().isEmpty(),
  body("description", "Description of the product is required").not().isEmpty(),
  //   body("images", "Images are required").not().isEmpty(),
  body("category", "category is required").not().isEmpty(),
  body("seller", "Seller is required").not().isEmpty(),
  body("stock", "stock is required").not().isEmpty(),
  //   body("reviews", "reviews are required").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
