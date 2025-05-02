const db = require("../../config/connection.js");

class ContactService {
    contactValidate(data) {
        let error = {};
        if (!data.name) error["name"] = "Name is required";
        if (!data.email) error["email"] = "Email is required";
        if (!data.message) error["message"] = "Message is required";

        return Object.keys(error).length ? error : null;
    }

    async getAllContacts() {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM contacts ORDER BY submitted_at DESC`;
            db.query(sql, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }

    async getContactById(id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM contacts WHERE id = ? LIMIT 1`;
            db.query(sql, [id], (err, rows) => {
                if (err) return reject(err);
                resolve(rows[0]);
            });
        });
    }

    async createContact(data) {
        return new Promise((resolve, reject) => {
            const sql = `
                INSERT INTO contacts (
                    name, email, message, created_by, updated_by
                ) VALUES (?, ?, ?, ?, ?)
            `;
            db.query(sql, [
                data.name,
                data.email,
                data.message,
                data.created_by || null,
                data.updated_by || null
            ], (err, result) => {
                if (err) return reject(err);
                resolve({ id: result.insertId, ...data });
            });
        });
    }

    async deleteContact(id) {
        return new Promise((resolve, reject) => {
            const sql = `DELETE FROM contacts WHERE id = ?`;
            db.query(sql, [id], (err, result) => {
                if (err) return reject(err);
                resolve(result.affectedRows > 0);
            });
        });
    }

    async updateContact(id, data) {
        return new Promise((resolve, reject) => {
            const sql = `
                UPDATE contacts SET 
                    name = ?, email = ?, message = ?, updated_by = ?
                WHERE id = ?
            `;
            db.query(sql, [
                data.name,
                data.email,
                data.message,
                data.updated_by || null,
                id
            ], (err, result) => {
                if (err) return reject(err);
                resolve({ id: id, ...data });
            });
        });
    }
}

module.exports = ContactService;
