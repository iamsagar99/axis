const express = require("express");
const router = express.Router();

const BlogTagController = require("../app/controllers/tags.controller");
const blogTag_ctrl = new BlogTagController();

const loginCheck = require("../app/middleware/auth.middleware");
const role = require("../app/middleware/rbac.middlware");

router.route('/')
    .get(blogTag_ctrl.getAllTags)
    .post(
        loginCheck,
        role.isAdminEditor,
        blogTag_ctrl.createTag
    );

router.route('/:id')
    .get(blogTag_ctrl.getTagById)
    .put(
        loginCheck,
        role.isAdminEditor,
        blogTag_ctrl.updateTag
    )
    .delete(
        loginCheck,
        role.isAdmin,
        blogTag_ctrl.deleteTag
    );

module.exports = router;
