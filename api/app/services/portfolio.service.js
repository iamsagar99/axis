const db = require("../../config/connection.js");

class PortfolioService {
    portfolioValidate(data) {
        let error = {};
        if (!data.title) error["title"] = "Title is required";
        if (!data.client_name) error["client_name"] = "Client Name is required";
        if (!data.before_stats) error["before_stats"] = "Before stats are required";
        if (!data.after_stats) error["after_stats"] = "After stats are required";

        return Object.keys(error).length ? error : null;
    }

    async getAllPortfolios() {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT * 
                FROM portfolios 
                ORDER BY created_at DESC
            `;
            db.query(sql, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }

    async getPortfolioById(id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM portfolios WHERE id = ? LIMIT 1`;
            db.query(sql, [id], (err, rows) => {
                if (err) return reject(err);
                resolve(rows[0]);
            });
        });
    }

    async createPortfolio(data) {
        return new Promise((resolve, reject) => {
            const sql = `
                INSERT INTO portfolios (
                    title, description, image_url, before_stats, after_stats, 
                    client_name, client_logo, active_flag, is_featured, created_by, updated_by
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            db.query(sql, [
                data.title,
                data.description || null,
                data.image_url || null,
                data.before_stats,
                data.after_stats,
                data.client_name,
                data.client_logo || null,
                data.active_flag || true,
                data.is_featured || false,
                data.created_by || null,
                data.updated_by || null
            ], (err, result) => {
                if (err) return reject(err);
                resolve({ id: result.insertId, ...data });
            });
        });
    }

    async updatePortfolio(id, data) {
        return new Promise((resolve, reject) => {
            const sql = `
                UPDATE portfolios SET 
                    title = ?, description = ?, image_url = ?, before_stats = ?, after_stats = ?, 
                    client_name = ?, client_logo = ?, active_flag = ?, is_featured = ?, updated_by = ?
                WHERE id = ?
            `;
            db.query(sql, [
                data.title,
                data.description || null,
                data.image_url || null,
                data.before_stats,
                data.after_stats,
                data.client_name,
                data.client_logo || null,
                data.active_flag || true,
                data.is_featured || false,
                data.updated_by || null,
                id
            ], (err, result) => {
                if (err) return reject(err);
                resolve({ id, ...data });
            });
        });
    }

    async deletePortfolio(id) {
        return new Promise((resolve, reject) => {
            const sql = `DELETE FROM portfolios WHERE id = ?`;
            db.query(sql, [id], (err, result) => {
                if (err) return reject(err);
                resolve(result.affectedRows > 0);
            });
        });
    }
}

module.exports = PortfolioService;
