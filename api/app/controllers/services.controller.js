const ServiceService = require("../services/services.service");
const slugify = require("slugify");
const fs = require("fs");
const path = require("path");

class ServiceController {
    constructor() {
        this.service_svc = new ServiceService();
    }

    getAllServices = async (req, res, next) => {
        try {
            const services = await this.service_svc.getAllServicesWithFeatures();
            return res.status(200).json({
                status: true,
                result: services,
                msg: "Services fetched successfully"
            });
        } catch (error) {
            console.error("Error fetching all services:", error);
            return next({
                status: 500,
                msg: "Failed to fetch services"
            });
        }
    };

    getServiceById = async (req, res, next) => {
        try {
            const service = await this.service_svc.getServiceById(req.params.id);
            if (!service) {
                return res.status(404).json({
                    status: false,
                    result: null,
                    msg: "Service not found"
                });
            }
            return res.status(200).json({
                status: true,
                result: service,
                msg: "Service fetched successfully"
            });
        } catch (error) {
            console.error("Error fetching service by ID:", error);
            return next({
                status: 500,
                msg: "Failed to fetch service"
            });
        }
    };

    getServiceBySlug = async (req, res, next) => {
        try {
            const service = await this.service_svc.getServiceBySlug(req.params.slug);
            if (!service) {
                return res.status(404).json({
                    status: false,
                    result: null,
                    msg: "Service not found"
                });
            }
            return res.status(200).json({
                status: true,
                result: service,
                msg: "Service fetched successfully"
            });
        } catch (error) {
            console.error("Error fetching service by slug:", error);
            return next({
                status: 500,
                msg: "Failed to fetch service"
            });
        }
    };

    addService = async (req, res, next) => {
        try {
            const {
                title,
                short_description,
                description,
                content_html,
                features = []
            } = req.body;

            const icon_url = req.file ? req.file.filename : null;
            const slug = slugify(title, { lower: true });
            const created_by = req.user?.name || "admin";

            const newService = await this.service_svc.createService({
                title,
                slug,
                short_description,
                description,
                content_html,
                icon_url,
                created_by
            }, features);

            return res.status(201).json({
                status: true,
                result: newService,
                msg: "Service created successfully"
            });
        } catch (error) {
            console.error("Error creating service:", error);
            return next({
                status: 400,
                msg: error.message || error
            });
        }
    };

    updateService = async (req, res, next) => {
        try {
            const {
                title,
                short_description,
                description,
                content_html,
                features = []
            } = req.body;

            const serviceId = req.params.id;
            const existingService = await this.service_svc.getServiceById(serviceId);

            if (!existingService) {
                return res.status(404).json({
                    status: false,
                    result: null,
                    msg: "Service not found"
                });
            }

            // Handle icon image update
            let icon_url = existingService.icon_url;
            if (req.file) {
                if (icon_url) {
                    const oldPath = path.join(__dirname, "../../public/uploads", path.basename(icon_url));
                    if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
                }
                icon_url = req.file.filename;
            }

            const slug = slugify(title, { lower: true });
            const updated_by = req.user?.name || "admin";

            // features might be string or array, normalize it
            const parsedFeatures = typeof features === "string" ? JSON.parse(features) : features;

            const updatedService = await this.service_svc.updateService(serviceId, {
                title,
                slug,
                short_description,
                description,
                content_html,
                icon_url,
                updated_by
            }, parsedFeatures);

            return res.status(200).json({
                status: true,
                result: updatedService,
                msg: "Service updated successfully"
            });
        } catch (error) {
            console.error("Error updating service:", error);
            return next({
                status: 500,
                msg: "Failed to update service"
            });
        }
    };

    deleteService = async (req, res, next) => {
        try {
            const serviceId = req.params.id;
            const existingService = await this.service_svc.getServiceById(serviceId);

            if (!existingService) {
                return res.status(404).json({
                    status: false,
                    result: null,
                    msg: "Service not found"
                });
            }

            if (existingService.icon_url) {
                const filePath = path.join(__dirname, "../../public/uploads", path.basename(existingService.icon_url));
                if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
            }

            await this.service_svc.deleteService(serviceId);

            return res.status(200).json({
                status: true,
                result: null,
                msg: "Service deleted successfully"
            });
        } catch (error) {
            console.error("Error deleting service:", error);
            return next({
                status: 500,
                msg: "Failed to delete service"
            });
        }
    };
}

module.exports = ServiceController;
