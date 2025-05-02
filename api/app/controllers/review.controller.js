const ReviewService = require("../services/review.service");
const review_service = new ReviewService();

class ReviewController {
    async getAllReviews(req, res) {
        try {
            const result = await review_service.getAllReviews();
            res.json({ success: true, data: result });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }

    async getReviewById(req, res) {
        try {
            const result = await review_service.getReviewById(req.params.id);
            if (!result) return res.status(404).json({ success: false, message: "Review not found" });
            res.json({ success: true, data: result });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }

    async createReview(req, res) {
        try {
            const errors = review_service.reviewValidate(req.body);
            if (errors) return res.status(400).json({ success: false, errors });

            const data = {
                ...req.body,
                created_by: req.user?.id || null,
                updated_by: req.user?.id || null
            };

            const result = await review_service.createReview(data);
            res.status(201).json({ success: true, message: "Review created successfully", data: result });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }

    async updateReview(req, res) {
        try {
            const errors = review_service.reviewValidate(req.body);
            if (errors) return res.status(400).json({ success: false, errors });

            const data = {
                ...req.body,
                updated_by: req.user?.id || null
            };

            const result = await review_service.updateReview(req.params.id, data);
            res.json({ success: true, message: "Review updated successfully", data: result });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }

    async deleteReview(req, res) {
        try {
            const deleted = await review_service.deleteReview(req.params.id);
            if (!deleted) return res.status(404).json({ success: false, message: "Review not found" });
            res.json({ success: true, message: "Review deleted successfully" });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
}

module.exports = ReviewController;
