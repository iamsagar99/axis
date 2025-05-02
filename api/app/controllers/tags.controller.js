const BlogTagService = require('../services/tags.service');

class BlogTagController {
    constructor() {
        this.blogTag_svc = new BlogTagService();
    }

    getAllTags = async (req, res, next) => {
        try {
            const tags = await this.blogTag_svc.getAllTags();
            res.json({
                result: tags,
                status: true,
                msg: "Tags fetched successfully"
            });
        } catch (error) {
            console.log("Error fetching tags:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };
    getTagById = async (req, res, next) => {
        try {
            const tagId = req.params.id;
            const tag = await this.blogTag_svc.getTagById(tagId);
            if (!tag) {
                return next({
                    status: 404,
                    msg: "Tag not found"
                });
            }
            res.json({
                result: tag,
                status: true,
                msg: "Tag fetched successfully"
            });
        } catch (error) {
            console.log("Error fetching tag:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };
    createTag = async (req, res, next) => {
        try {
            const data = req.body;
            const validationError = this.blogTag_svc.validateTag(data);
            if (validationError) {
                return next({
                    status: 400,
                    msg: validationError
                });
            }
            data.slug = slugify(data.name, { lower: true });
            const tag = await this.blogTag_svc.createTag(data);
            res.json({
                result: tag,
                status: true,
                msg: "Tag created successfully"
            });
        } catch (error) {
            console.log("Error creating tag:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };
    updateTag = async (req, res, next) => {
        try {
            const tagId = req.params.id;
            const data = req.body;
            const validationError = this.blogTag_svc.validateTag(data);
            if (validationError) {
                return next({
                    status: 400,
                    msg: validationError
                });
            }
            data.slug = slugify(data.name, { lower: true });
            const tag = await this.blogTag_svc.updateTag(tagId, data);
            res.json({
                result: tag,
                status: true,
                msg: "Tag updated successfully"
            });
        } catch (error) {
            console.log("Error updating tag:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };
    deleteTag = async (req, res, next) => {
        try {
            const tagId = req.params.id;
            const tag = await this.blogTag_svc.deleteTag(tagId);
            res.json({
                result: tag,
                status: true,
                msg: "Tag deleted successfully"
            });
        } catch (error) {
            console.log("Error deleting tag:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };
}
module.exports = BlogTagController;