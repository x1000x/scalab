const express = require("express");
const router = express.Router();
//controller middlewares
const {create} = require("../controllers/product");




//routes-endpoints products
 router.post("/product", create);
// router.get("/products/total", productsCount);
// router.get("/products/:count", listAll);
// router.patch("/product/:slug", remove);
// router.delete("/product/:slug", remove2);
// router.get("product/:slug", read);
// router.put("product/:slug", update);

module.exports = router;