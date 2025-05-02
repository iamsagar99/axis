const db = require("../../config/connection.js");

class ProductService {
    productValidate(data) {
        let error = {};
        if (!data.title) error["title"] = "Title is required";
        if (!data.slug) error["slug"] = "Slug is required";
        if (!data.description) error["description"] = "Description is required";
        if (!data.icon_url) error["icon_url"] = "Icon URL is required";

        return Object.keys(error).length ? error : null;
    }
    getProductBySlug(slug) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM products WHERE slug = ? LIMIT 1", [slug], (err, rows) => {
                if (err) return reject(err);
                resolve(rows[0]);
            });
        });
    }
    createProduct(data) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO products (title, slug, description, icon_url) VALUES (?, ?, ?, ?)`;
            db.query(sql, [
                data.title,
                data.slug,
                data.description,
                data.icon_url
            ], (err, result) => {
                if (err) return reject(err);
                resolve({
                    id: result.insertId,
                    ...data
                });
            });
        });
    }
    updateProduct(data) {
        return new Promise((resolve, reject) => {
            const sql = `UPDATE products SET title = ?, slug = ?, description = ?, icon_url = ? WHERE id = ?`;
            db.query(sql, [
                data.title,
                data.slug,
                data.description,
                data.icon_url,
                data.id
            ], (err, result) => {
                if (err) return reject(err);
                resolve({
                    id: data.id,
                    ...data
                });
            });
        });
    }
    deleteProduct(id) {
        return new Promise((resolve, reject) => {
            const sql = `DELETE FROM products WHERE id = ?`;
            db.query(sql, [id], (err, result) => {
                if (err) return reject(err);
                resolve(result.affectedRows > 0);
            });
        });
    }
    getAllProducts() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM products", (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }
    getProductById(id) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM products WHERE id = ? LIMIT 1", [id], (err, rows) => {
                if (err) return reject(err);
                resolve(rows[0]);
            });
        });
    }
    getProductByName(name) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM products WHERE title = ? LIMIT 1", [name], (err, rows) => {
                if (err) return reject(err);
                resolve(rows[0]);
            });
        });
    }

}

module.exports = ProductService;
