const ProductService = require("../services/product.service");
const slugify = require("slugify");

class ProductController {
    constructor() {
        this.product_svc = new ProductService();
    }

    getAllProducts = async (req, res, next) => {
        try {
            const products = await this.product_svc.getAllProducts();
            res.json({
                result: products,
                status: true,
                msg: "Products fetched successfully"
            });
        } catch (error) {
            console.log("Error fetching products:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };

    getProductById = async (req, res, next) => {
        try {
            const productId = req.params.id;
            const product = await this.product_svc.getProductById(productId);
            if (!product) {
                return next({
                    status: 404,
                    msg: "Product not found"
                });
            }
            res.json({
                result: product,
                status: true,
                msg: "Product fetched successfully"
            });
        } catch (error) {
            console.log("Error fetching product:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };
    getProductBySlug = async (req, res, next) => {
        try {
            const slug = req.params.slug;
            const product = await this.product_svc.getProductBySlug(slug);
            if (!product) {
                return next({
                    status: 404,
                    msg: "Product not found"
                });
            }
            res.json({
                result: product,
                status: true,
                msg: "Product fetched successfully"
            });
        } catch (error) {
            console.log("Error fetching product:", error);
            next({
                status: 400,
                msg: error
            });
        }
    }
    
    createProduct = async (req, res, next) => {
        try {
            const data = req.body;
            if(req.file){
                data.icon_url = req.file.filename;
            }
            data.slug = slugify(data.title.toLowerCase());
            const product = await this.product_svc.createProduct(data);
            res.json({
                result: product,
                status: true,
                msg: "Product created successfully"
            });
        } catch (error) {
            console.log("Error creating product:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };
    updateProduct = async (req, res, next) => {
        try {
            const productId = req.params.id;
            const data = req.body;
            if(req.file){
                data.icon_url = req.file.filename;
            }
            const product = await this.product_svc.updateProduct(productId, data);
            if (!product) {
                return next({
                    status: 404,
                    msg: "Product not found"
                });
            }
            res.json({
                result: product,
                status: true,
                msg: "Product updated successfully"
            });
        } catch (error) {
            console.log("Error updating product:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };
    deleteProduct = async (req, res, next) => {
        try {
            const productId = req.params.id;
            const result = await this.product_svc.deleteProduct(productId);
            if (!result) {
                return next({
                    status: 404,
                    msg: "Product not found"
                });
            }
            res.json({
                result,
                status: true,
                msg: "Product deleted successfully"
            });
        } catch (error) {
            console.log("Error deleting product:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };

}

module.exports = ProductController;