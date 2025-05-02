const db = require("../../config/connection.js");

class BlogService {
    blogValidate(data) {
        let error = {};
        if (!data.title) error["title"] = "Title is required";
        if (!data.slug) error["slug"] = "Slug is required";
        if (!data.content) error["content"] = "Content is required";
        if (!data.author_id) error["author_id"] = "Author ID is required";

        return Object.keys(error).length ? error : null;
    }

    async getAllBlogs() {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT b.*, GROUP_CONCAT(t.name) AS tags
                FROM blogs b
                LEFT JOIN blog_tag_map btm ON b.id = btm.blog_id
                LEFT JOIN blog_tags t ON t.id = btm.tag_id
                GROUP BY b.id
                ORDER BY b.created_at DESC
            `;
            db.query(sql, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }

    async getBlogById(id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM blogs WHERE id = ? LIMIT 1`;
            db.query(sql, [id], (err, rows) => {
                if (err) return reject(err);
                resolve(rows[0]);
            });
        });
    }

    async getBlogBySlug(slug) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM blogs WHERE slug = ? LIMIT 1`;
            db.query(sql, [slug], (err, rows) => {
                if (err) return reject(err);
                resolve(rows[0]);
            });
        });
    }

    async createBlog(data) {
        return new Promise((resolve, reject) => {
            const sql = `
                INSERT INTO blogs (
                    title, slug, content, image_url, published_at, author_id,
                    status, is_featured, created_by, updated_by
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            db.query(sql, [
                data.title,
                data.slug,
                data.content,
                data.image_url || null,
                data.published_at || null,
                data.author_id,
                data.status || 'draft',
                data.is_featured || false,
                data.created_by || null,
                data.updated_by || null
            ], (err, result) => {
                if (err) return reject(err);
                if (data.tag_ids && data.tag_ids.length > 0) {
                    this.attachTagsToBlog(result.insertId, data.tag_ids, data.created_by)
                        .then(() => resolve({ id: result.insertId, ...data }))
                        .catch(reject);
                } else {
                    resolve({ id: result.insertId, ...data });
                }
            });
        });
    }

    async updateBlog(id, data) {
        return new Promise((resolve, reject) => {
            const sql = `
                UPDATE blogs SET 
                    title = ?, slug = ?, content = ?, image_url = ?, 
                    published_at = ?, author_id = ?, status = ?, 
                    is_featured = ?, updated_by = ?
                WHERE id = ?
            `;
            db.query(sql, [
                data.title,
                data.slug,
                data.content,
                data.image_url || null,
                data.published_at || null,
                data.author_id,
                data.status || 'draft',
                data.is_featured || false,
                data.updated_by || null,
                id
            ], async (err, result) => {
                if (err) return reject(err);
                if (data.tag_ids) {
                    try {
                        await this.updateBlogTags(id, data.tag_ids, data.updated_by);
                    } catch (e) {
                        return reject(e);
                    }
                }
                resolve({ id, ...data });
            });
        });
    }

    async deleteBlog(id) {
        return new Promise((resolve, reject) => {
            const sql = `DELETE FROM blogs WHERE id = ?`;
            db.query(sql, [id], (err, result) => {
                if (err) return reject(err);
                resolve(result.affectedRows > 0);
            });
        });
    }

    async attachTagsToBlog(blogId, tagIds = [], createdBy = null) {
        return new Promise((resolve, reject) => {
            if (tagIds.length === 0) return resolve(true);

            const values = tagIds.map(tagId => `(${blogId}, ${tagId}, ${db.escape(createdBy)}, ${db.escape(createdBy)})`).join(',');
            const sql = `
                INSERT INTO blog_tag_map (blog_id, tag_id, created_by, updated_by)
                VALUES ${values}
            `;
            db.query(sql, (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    }

    async updateBlogTags(blogId, tagIds = [], updatedBy = null) {
        return new Promise(async (resolve, reject) => {
            const deleteSql = `DELETE FROM blog_tag_map WHERE blog_id = ?`;
            db.query(deleteSql, [blogId], async (err) => {
                if (err) return reject(err);
                try {
                    await this.attachTagsToBlog(blogId, tagIds, updatedBy);
                    resolve(true);
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
}

module.exports = BlogService;
