const PortfolioService = require("../services/portfolio.service");
const slugify = require("slugify");

class PortfolioController {
    constructor() {
        this.portfolio_svc = new PortfolioService();
    }

    getAllPortfolios = async (req, res, next) => {
        try {
            const portfolios = await this.portfolio_svc.getAllPortfolios();
            res.json({
                result: portfolios,
                status: true,
                msg: "Portfolios fetched successfully"
            });
        } catch (error) {
            console.log("Error fetching portfolios:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };

    getPortfolioById = async (req, res, next) => {
        try {
            const portfolioId = req.params.id;
            const portfolio = await this.portfolio_svc.getPortfolioById(portfolioId);
            if (!portfolio) {
                return next({
                    status: 404,
                    msg: "Portfolio not found"
                });
            }
            res.json({
                result: portfolio,
                status: true,
                msg: "Portfolio fetched successfully"
            });
        } catch (error) {
            console.log("Error fetching portfolio:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };

    createPortfolio = async (req, res, next) => {
        try {
            const data = req.body;
            const validationError = this.portfolio_svc.portfolioValidate(data);
            if (validationError) {
                return next({
                    status: 400,
                    msg: validationError
                });
            }

            if (req.files) {
                if (req.files.image_url) {
                    data.image_url = req.files.image_url[0].filename; // Save image_url file
                }
                if (req.files.client_logo) {
                    data.client_logo = req.files.client_logo[0].filename; // Save client_logo file
                }
            }

            const portfolio = await this.portfolio_svc.createPortfolio(data);

            res.json({
                result: portfolio,
                status: true,
                msg: "Portfolio created successfully"
            });
        } catch (error) {
            console.log("Error creating portfolio:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };

    // Update an existing portfolio
    updatePortfolio = async (req, res, next) => {
        try {
            const portfolioId = req.params.id;
            const data = req.body;

            // Validate portfolio data
            const validationError = this.portfolio_svc.portfolioValidate(data);
            if (validationError) {
                return next({
                    status: 400,
                    msg: validationError
                });
            }

            // Handle file uploads for 'image_url' and 'client_logo'
            if (req.files) {
                if (req.files.image_url) {
                    data.image_url = req.files.image_url[0].filename; // Save image_url file
                }
                if (req.files.client_logo) {
                    data.client_logo = req.files.client_logo[0].filename; // Save client_logo file
                }
            }

            const portfolio = await this.portfolio_svc.updatePortfolio(portfolioId, data);

            if (!portfolio) {
                return next({
                    status: 404,
                    msg: "Portfolio not found"
                });
            }

            res.json({
                result: portfolio,
                status: true,
                msg: "Portfolio updated successfully"
            });
        } catch (error) {
            console.log("Error updating portfolio:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };

    deletePortfolio = async (req, res, next) => {
        try {
            const portfolioId = req.params.id;
            const result = await this.portfolio_svc.deletePortfolio(portfolioId);

            if (!result) {
                return next({
                    status: 404,
                    msg: "Portfolio not found"
                });
            }

            res.json({
                result,
                status: true,
                msg: "Portfolio deleted successfully"
            });
        } catch (error) {
            console.log("Error deleting portfolio:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };

    getPortfolioBySlug = async (req, res, next) => {
        try {
            const slug = req.params.slug;
            const portfolio = await this.portfolio_svc.getPortfolioBySlug(slug);
            if (!portfolio) {
                return next({
                    status: 404,
                    msg: "Portfolio not found"
                });
            }
            res.json({
                result: portfolio,
                status: true,
                msg: "Portfolio fetched successfully"
            });
        } catch (error) {
            console.log("Error fetching portfolio by slug:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };
}

module.exports = PortfolioController;
