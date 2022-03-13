const express = require("express");
const router = express.Router();

// controllers
const {getAllProducts, newProducts, getSingleProduct, updateProduct, deleteProducts} = require("../controllers/productController");

// validators
const {productValidator} = require("../Validators/validator");
// all routes
router.route("/products/new").post(productValidator, newProducts)
router.route('/products').get(getAllProducts)
router.route('/admin/products/:id').get(getSingleProduct)
router.route('/admin/products/:id').put(updateProduct)
router.route('/admin/products/:id').delete(deleteProducts)


module.exports = router;