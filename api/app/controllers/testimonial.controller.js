const TestimonialService = require("../services/testimonials.service");
const slugify = require("slugify");

class TestimonialController {
    constructor() {
        this.testimonial_svc = new TestimonialService();
    }

    getAllTestimonials = async (req, res, next) => {
        try {
            const testimonials = await this.testimonial_svc.getAllTestimonials();
            res.json({
                result: testimonials,
                status: true,
                msg: "Testimonials fetched successfully"
            });
        } catch (error) {
            console.error("Error fetching testimonials:", error);
            next({ status: 500, msg: error });
        }
    };

    getTestimonialById = async (req, res, next) => {
        try {
            const testimonial = await this.testimonial_svc.getTestimonialById(req.params.id);
            if (!testimonial) {
                return next({ status: 404, msg: "Testimonial not found" });
            }
            res.json({
                result: testimonial,
                status: true,
                msg: "Testimonial fetched successfully"
            });
        } catch (error) {
            console.error("Error fetching testimonial:", error);
            next({ status: 500, msg: error });
        }
    };
    
    createTestimonial = async (req, res, next) => {
        try {
            const data = req.body;
            data.slug = slugify(data.title.toLowerCase());
            if (req.file) {
                data.image_url = req.file.path;
            }
            const testimonial = await this.testimonial_svc.createTestimonial(data);
            res.json({
                result: testimonial,
                status: true,
                msg: "Testimonial created successfully"
            });
        } catch (error) {
            console.error("Error creating testimonial:", error);
            next({ status: 500, msg: error });
        }
    };
    updateTestimonial = async (req, res, next) => {
        try {
            const data = req.body;
            if (req.file) {
                data.image_url = req.file.path;
            }
            const testimonial = await this.testimonial_svc.updateTestimonial(req.params.id, data);
            res.json({
                result: testimonial,
                status: true,
                msg: "Testimonial updated successfully"
            });
        } catch (error) {
            console.error("Error updating testimonial:", error);
            next({ status: 500, msg: error });
        }
    }

    deleteTestimonial = async (req, res, next) => {
        try {
            const testimonial = await this.testimonial_svc.deleteTestimonial(req.params.id);
            if (!testimonial) {
                return next({ status: 404, msg: "Testimonial not found" });
            }
            res.json({
                result: testimonial,
                status: true,
                msg: "Testimonial deleted successfully"
            });
        } catch (error) {
            console.error("Error deleting testimonial:", error);
            next({ status: 500, msg: error });
        }
    };
}

module.exports = TestimonialController;