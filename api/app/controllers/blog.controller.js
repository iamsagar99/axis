const BlogService = require("../services/blog.service");
const slugify = require("slugify");

class BlogController {
    constructor() {
        this.blog_svc = new BlogService();
    }

    getAllBlogs = async (req, res, next) => {
        try {
            const blogs = await this.blog_svc.getAllBlogs();
            res.json({
                result: blogs,
                status: true,
                msg: "Blogs fetched successfully"
            });
        } catch (error) {
            console.error("Error fetching blogs:", error);
            next({ status: 500, msg: error });
        }
    };

    getBlogById = async (req, res, next) => {
        try {
            const blog = await this.blog_svc.getBlogById(req.params.id);
            if (!blog) {
                return next({ status: 404, msg: "Blog not found" });
            }
            res.json({
                result: blog,
                status: true,
                msg: "Blog fetched successfully"
            });
        } catch (error) {
            console.error("Error fetching blog:", error);
            next({ status: 500, msg: error });
        }
    };

    getBlogBySlug = async (req, res, next) => {
        try {
            const blog = await this.blog_svc.getBlogBySlug(req.params.slug);
            if (!blog) {
                return next({ status: 404, msg: "Blog not found" });
            }
            res.json({
                result: blog,
                status: true,
                msg: "Blog fetched successfully"
            });
        } catch (error) {
            console.error("Error fetching blog by slug:", error);
            next({ status: 500, msg: error });
        }
    };

    createBlog = async (req, res, next) => {
        try {
            const data = req.body;
            data.slug = slugify(data.title.toLowerCase());
            if (req.file) {
                data.image_url = req.file.filename;
            }
            const validation = this.blog_svc.blogValidate(data);
            if (validation) {
                return next({ status: 422, msg: validation });
            }

            const blog = await this.blog_svc.createBlog(data);
            res.json({
                result: blog,
                status: true,
                msg: "Blog created successfully"
            });
        } catch (error) {
            console.error("Error creating blog:", error);
            next({ status: 500, msg: error });
        }
    };

    updateBlog = async (req, res, next) => {
        try {
            const blogId = req.params.id;
            const data = req.body;
            data.slug = slugify(data.title.toLowerCase());
            if (req.file) {
                data.image_url = req.file.filename;
            }

            const blog = await this.blog_svc.updateBlog(blogId, data);
            res.json({
                result: blog,
                status: true,
                msg: "Blog updated successfully"
            });
        } catch (error) {
            console.error("Error updating blog:", error);
            next({ status: 500, msg: error });
        }
    };

    deleteBlog = async (req, res, next) => {
        try {
            const blogId = req.params.id;
            const success = await this.blog_svc.deleteBlog(blogId);
            if (!success) {
                return next({ status: 404, msg: "Blog not found" });
            }
            res.json({
                result: success,
                status: true,
                msg: "Blog deleted successfully"
            });
        } catch (error) {
            console.error("Error deleting blog:", error);
            next({ status: 500, msg: error });
        }
    };
}

module.exports = BlogController;
