const db = require("../../config/connection.js");

class ReviewService {
    reviewValidate(data) {
        let error = {};
        if (!data.name) error["name"] = "Name is required";
        if (!data.rating || data.rating < 1 || data.rating > 5)
            error["rating"] = "Rating must be between 1 and 5";
        if (!data.comment) error["comment"] = "Comment is required";

        return Object.keys(error).length ? error : null;
    }

    async getAllReviews() {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM reviews ORDER BY created_at DESC`;
            db.query(sql, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }

    async getReviewById(id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM reviews WHERE id = ? LIMIT 1`;
            db.query(sql, [id], (err, rows) => {
                if (err) return reject(err);
                resolve(rows[0]);
            });
        });
    }

    async createReview(data) {
        return new Promise((resolve, reject) => {
            const sql = `
                INSERT INTO reviews (
                    name, email, rating, comment, service_id,
                    is_approved, active_flag, created_by, updated_by
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            db.query(sql, [
                data.name,
                data.email || null,
                data.rating,
                data.comment,
                data.service_id || null,
                data.is_approved || false,
                data.active_flag || true,
                data.created_by || null,
                data.updated_by || null
            ], (err, result) => {
                if (err) return reject(err);
                resolve({ id: result.insertId, ...data });
            });
        });
    }

    async updateReview(id, data) {
        return new Promise((resolve, reject) => {
            const sql = `
                UPDATE reviews SET 
                    name = ?, email = ?, rating = ?, comment = ?, 
                    service_id = ?, is_approved = ?, active_flag = ?, 
                    updated_by = ?
                WHERE id = ?
            `;
            db.query(sql, [
                data.name,
                data.email || null,
                data.rating,
                data.comment,
                data.service_id || null,
                data.is_approved || false,
                data.active_flag || true,
                data.updated_by || null,
                id
            ], (err, result) => {
                if (err) return reject(err);
                resolve({ id, ...data });
            });
        });
    }

    async deleteReview(id) {
        return new Promise((resolve, reject) => {
            const sql = `DELETE FROM reviews WHERE id = ?`;
            db.query(sql, [id], (err, result) => {
                if (err) return reject(err);
                resolve(result.affectedRows > 0);
            });
        });
    }
}

module.exports = ReviewService;
