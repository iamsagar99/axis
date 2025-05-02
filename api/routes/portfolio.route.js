const express = require("express");
const router = express.Router();

const PortfolioController = require("../app/controllers/portfolio.controller");
const portfolio_ctrl = new PortfolioController();

const loginCheck = require("../app/middleware/auth.middleware");
const uploader = require("../app/middleware/file-upload.middleware");
const role = require("../app/middleware/rbac.middlware");

const setDestination = (req, res, next) => {
    req.dest = "portfolios";
    next();
};

router.route('/')
    .get(portfolio_ctrl.getAllPortfolios)
    .post(
        loginCheck,
        role.isAdminEditor,
        setDestination,
        uploader.fields([
            { name: "image_url", maxCount: 1 },
            { name: "client_logo", maxCount: 1 }
        ]),
        portfolio_ctrl.createPortfolio
    );

router.route('/:id')
    .get(portfolio_ctrl.getPortfolioById)
    .put(
        loginCheck,
        role.isAdminEditor,
        setDestination,
        uploader.fields([
            { name: "image_url", maxCount: 1 },
            { name: "client_logo", maxCount: 1 }
        ]),
        portfolio_ctrl.updatePortfolio
    )
    .delete(
        loginCheck,
        role.isAdmin,
        portfolio_ctrl.deletePortfolio
    );
router.route('/slug/:slug')
    .get(portfolio_ctrl.getPortfolioBySlug);

module.exports = router;
