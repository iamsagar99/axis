const db = require("../../config/connection.js");

class TestimonialService {
    testimonialValidate(data) {
        let error = {};
        if (!data.name) error["name"] = "Name is required";
        if (!data.quote) error["quote"] = "Quote is required";

        return Object.keys(error).length ? error : null;
    }

    async getAllTestimonials() {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT * FROM testimonials
                ORDER BY created_at DESC
            `;
            db.query(sql, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }

    async getTestimonialById(id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM testimonials WHERE id = ? LIMIT 1`;
            db.query(sql, [id], (err, rows) => {
                if (err) return reject(err);
                resolve(rows[0]);
            });
        });
    }

    async createTestimonial(data) {
        return new Promise((resolve, reject) => {
            const sql = `
                INSERT INTO testimonials (
                    name, company, quote, image_url, active_flag, is_featured,
                    created_by, updated_by
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `;
            db.query(sql, [
                data.name,
                data.company || null,
                data.quote,
                data.image_url || null,
                data.active_flag !== undefined ? data.active_flag : true,
                data.is_featured !== undefined ? data.is_featured : false,
                data.created_by || null,
                data.updated_by || null
            ], (err, result) => {
                if (err) return reject(err);
                resolve({ id: result.insertId, ...data });
            });
        });
    }

    async updateTestimonial(id, data) {
        return new Promise((resolve, reject) => {
            const sql = `
                UPDATE testimonials SET 
                    name = ?, company = ?, quote = ?, image_url = ?, 
                    active_flag = ?, is_featured = ?, updated_by = ?
                WHERE id = ?
            `;
            db.query(sql, [
                data.name,
                data.company || null,
                data.quote,
                data.image_url || null,
                data.active_flag !== undefined ? data.active_flag : true,
                data.is_featured !== undefined ? data.is_featured : false,
                data.updated_by || null,
                id
            ], (err, result) => {
                if (err) return reject(err);
                resolve({ id, ...data });
            });
        });
    }

    async deleteTestimonial(id) {
        return new Promise((resolve, reject) => {
            const sql = `DELETE FROM testimonials WHERE id = ?`;
            db.query(sql, [id], (err, result) => {
                if (err) return reject(err);
                resolve(result.affectedRows > 0);
            });
        });
    }
}

module.exports = TestimonialService;
