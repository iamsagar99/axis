const express = require("express");
const router = express.Router();

const BlogController = require("../app/controllers/blog.controller");
const blog_ctrl = new BlogController();

const loginCheck = require("../app/middleware/auth.middleware");
const uploader = require("../app/middleware/file-upload.middleware");
const role = require("../app/middleware/rbac.middlware");

let setDestination = (req, res, next) => {
    req.dest = "blogs";
    next();
};

router.route('/')
    .get(blog_ctrl.getAllBlogs)
    .post(
        loginCheck,
        role.isAdminEditor,
        setDestination,
        uploader.single('image'),
        blog_ctrl.createBlog
    );

router.route('/:id')
    .get(blog_ctrl.getBlogById)
    .put(
        loginCheck,
        role.isAdminEditor,
        setDestination,
        uploader.single('image'),
        blog_ctrl.updateBlog
    )
    .delete(loginCheck, role.isAdmin, blog_ctrl.deleteBlog);

router.route('/slug/:slug')
    .get(blog_ctrl.getBlogBySlug);

module.exports = router;
