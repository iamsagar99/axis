const express = require("express");
const router = express.Router();

const ReviewController = require("../app/controllers/review.controller");
const review_ctrl = new ReviewController();

const loginCheck = require("../app/middleware/auth.middleware");
const role = require("../app/middleware/rbac.middlware");

router.route('/')
    .get(review_ctrl.getAllReviews)
    .post(
        loginCheck,
        role.isAdminEditor,
        review_ctrl.createReview
    );
router.route('/:id')
    .get(review_ctrl.getReviewById)
    .put(
        loginCheck,
        role.isAdminEditor,
        review_ctrl.updateReview
    )
    .delete(
        loginCheck,
        role.isAdmin,
        review_ctrl.deleteReview
    );

module.exports = router;