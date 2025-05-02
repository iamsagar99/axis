const express = require("express");
const router = express.Router();

const ProductController = require("../app/controllers/product.controller");
const prod_ctrl = new ProductController();

const loginCheck = require("../app/middleware/auth.middleware");
const uploader = require("../app/middleware/file-upload.middleware");
const role = require("../app/middleware/rbac.middlware");
let setDestination = (req, res, next) => {
    req.dest = "products"; 
    next()
}

router.route('/')
    .get(prod_ctrl.getAllProducts)
    .post(
        loginCheck,
        role.isAdmin, 
        setDestination, 
        uploader.single('image'), 
        prod_ctrl.createProduct
    );

router.route('/:id')
    .get(prod_ctrl.getProductById)
    .put(
        loginCheck,
        role.isAdmin, 
        setDestination, 
        uploader.single('image'), 
        prod_ctrl.updateProduct
    )
    .delete(loginCheck,role.isAdmin,prod_ctrl.deleteProduct);
router.route('/slug/:slug')
    .get(prod_ctrl.getProductBySlug);
module.exports = router;