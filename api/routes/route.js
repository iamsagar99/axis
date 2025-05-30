const express = require("express");
const router = express.Router();

const auth_routes = require("./auth.route");
const product_routes = require("./product.route");
const blog_routes = require("./blog.route");
const testimonial_routes = require("./testimonials.route");
const portfolio_routes = require("./portfolio.route");
const blog_tag_routes = require("./tags.route");
const contact_routes = require("./contact.route");
const review_routes = require("./review.route");
const service_routes = require("./services.route");

// router.use('/services', product_routes);
router.use('/blogs', blog_routes);
router.use('/testimonials', testimonial_routes);
router.use('/portfolios', portfolio_routes);
router.use('/tags', blog_tag_routes);
router.use('/contacts', contact_routes);
router.use('/reviews', review_routes);
router.use('/services', service_routes);
router.use('/auth',auth_routes);

module.exports = router;
