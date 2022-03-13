const Product = require("../models/product");
// create products
exports.newProducts = async (req, res, next) => {
  const {
    name,
    price,
    description,
    rating,
    image,
    category,
    seller,
    stock,
    numOfReviews,
    reviews,
  } = req.body;
  // console.log(image);
  // console.log(reviews);
  try {
    let product = new Product({
      name,
      price,
      description,
      rating,
      image,
      category,
      seller,
      stock,
      numOfReviews,
      reviews,
    });

    await product.save();
    res.status(200).send(product);
  } catch (error) {
    console.log(`catch block of newProducts`);
  }
};

// get all products
exports.getAllProducts = async(req,res,next)=>{
    const product = await Product.find();
    res.send(product)
}

// get Single product 
exports.getSingleProduct = async (req,res,next)=>{
    const product = await Product.findById(req.params.id);
    console.log(product)
    if (!product){
        return res.status(404).json("Product is not found")
    }else{
        res.status(200).json(product)
    }
}

// update product
exports.updateProduct = async (req,res,next)=>{
    let product = await Product.findById(req.params.id);
    console.log(product)
    if (!product){
        return res.status(404).json("Product is not found")
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json(product)

}


// delete product
exports.deleteProducts = async (req,res,next)=>{
    let product = await Product.findById(req.params.id);
    console.log(product)
    if (!product){
        return res.status(404).json("Product is not found")
    }
    // product = await Product.findByIdAndDelete()
    await product.remove()
    res.status(200).json("Product is deleted successfully")
}