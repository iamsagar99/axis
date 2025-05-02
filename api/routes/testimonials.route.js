const express = require('express');
const router = express.Router();

const TestimonialController = require('../app/controllers/testimonial.controller');
const testimonial_ctrl = new TestimonialController();

const loginCheck = require('../app/middleware/auth.middleware');
const uploader = require('../app/middleware/file-upload.middleware');
const role = require('../app/middleware/rbac.middlware');

let setDestination = (req, res, next) => {
    req.dest = 'testimonials';
    next();
};


router
    .route('/')
    .get(testimonial_ctrl.getAllTestimonials)
    .post(
        loginCheck,
        role.isAdminEditor,
        setDestination,
        uploader.single('image'),
        testimonial_ctrl.createTestimonial
    );
router
    .route('/:id')
    .get(testimonial_ctrl.getTestimonialById)
    .put(
        loginCheck,
        role.isAdminEditor,
        setDestination,
        uploader.single('image'),
        testimonial_ctrl.updateTestimonial
    )
    .delete(loginCheck, role.isAdmin, testimonial_ctrl.deleteTestimonial);

module.exports = router;