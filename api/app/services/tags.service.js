const db = require("../../config/connection.js");

class BlogTagService {
    validateTag(data) {
        let error = {};
        if (!data.name) error["name"] = "Tag name is required";
        if (!data.slug) error["slug"] = "Slug is required";

        return Object.keys(error).length ? error : null;
    }

    async getAllTags() {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM blog_tags ORDER BY created_at DESC`;
            db.query(sql, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }

    async getTagById(id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM blog_tags WHERE id = ? LIMIT 1`;
            db.query(sql, [id], (err, rows) => {
                if (err) return reject(err);
                resolve(rows[0]);
            });
        });
    }

    async createTag(data) {
        return new Promise((resolve, reject) => {
            const sql = `
                INSERT INTO blog_tags (
                    name, slug, active_flag, is_featured, created_by, updated_by
                ) VALUES (?, ?, ?, ?, ?, ?)
            `;
            db.query(sql, [
                data.name,
                data.slug,
                data.active_flag ?? true,
                data.is_featured ?? false,
                data.created_by || null,
                data.updated_by || null
            ], (err, result) => {
                if (err) return reject(err);
                resolve({ id: result.insertId, ...data });
            });
        });
    }

    async updateTag(id, data) {
        return new Promise((resolve, reject) => {
            const sql = `
                UPDATE blog_tags SET 
                    name = ?, slug = ?, active_flag = ?, is_featured = ?, updated_by = ?
                WHERE id = ?
            `;
            db.query(sql, [
                data.name,
                data.slug,
                data.active_flag ?? true,
                data.is_featured ?? false,
                data.updated_by || null,
                id
            ], (err, result) => {
                if (err) return reject(err);
                resolve({ id, ...data });
            });
        });
    }

    async deleteTag(id) {
        return new Promise((resolve, reject) => {
            const sql = `DELETE FROM blog_tags WHERE id = ?`;
            db.query(sql, [id], (err, result) => {
                if (err) return reject(err);
                resolve(result.affectedRows > 0);
            });
        });
    }
    async getTagBySlug(slug) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM blog_tags WHERE slug = ? LIMIT 1`;
            db.query(sql, [slug], (err, rows) => {
                if (err) return reject(err);
                resolve(rows[0]);
            });
        });
    }
}

module.exports = BlogTagService;
