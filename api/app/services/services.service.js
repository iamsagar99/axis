const connectionPromise = require("../../config/connection.js");

class ServiceService {
    // Create a service with optional features
    async createService(serviceData, features = []) {
        const db = await connectionPromise;
        const {
            title,
            slug,
            short_description,
            description,
            icon_url,
            content_html,
            created_by
        } = serviceData;
        console.log(serviceData)
        const [result] = await db.query(
            `INSERT INTO dm.services (title, slug, short_description, description, icon_url, content_html, created_by)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [title, slug, short_description, description, icon_url, content_html, created_by]
        );

        const serviceId = result.insertId;

        if (features.length) {
            await this.addServiceFeatures(serviceId, features);
        }

        return this.getServiceById(serviceId); // Return full data with features
    }

    // Update a service and its features
    async updateService(serviceId, serviceData, features = []) {
        const db = await connectionPromise;
        const {
            title,
            slug,
            short_description,
            description,
            icon_url,
            content_html,
            updated_by
        } = serviceData;

        await db.query(
            `UPDATE dm.services SET title = ?, slug = ?, short_description = ?, description = ?, 
             icon_url = ?, content_html = ?, updated_by = ? WHERE id = ?`,
            [title, slug, short_description, description, icon_url, content_html, updated_by, serviceId]
        );

        // If features provided, replace existing ones
        if (features.length) {
            await this.replaceServiceFeatures(serviceId, features);
        }

        return this.getServiceById(serviceId);
    }

    // Delete a service and cascade delete its features
    async deleteService(serviceId) {
        const db = await connectionPromise;
        const [result] = await db.query(`DELETE FROM dm.services WHERE id = ?`, [serviceId]);
        return result.affectedRows > 0;
    }

    // Add new features
    async addServiceFeatures(serviceId, features) {
        if (!features.length) return;

        const db = await connectionPromise;
        const values = features.map(f => [serviceId, f.title, f.description]);
        await db.query(
            `INSERT INTO dm.service_features (service_id, title, description) VALUES ?`,
            [values]
        );
    }

    // Replace features by deleting old and inserting new ones
    async replaceServiceFeatures(serviceId, features) {
        const db = await connectionPromise;
        await db.query(`DELETE FROM dm.service_features WHERE service_id = ?`, [serviceId]);
        await this.addServiceFeatures(serviceId, features);
    }

    // Get all services without features
    async getAllServices() {
        const db = await connectionPromise;
        const [rows] = await db.query(`SELECT * FROM dm.services`);
        return rows;
    }

    // Get all services with their features
    async getAllServicesWithFeatures() {
        const db = await connectionPromise;
        const [services] = await db.query(`SELECT * FROM dm.services`);
        for (let service of services) {
            const [features] = await db.query(
                `SELECT id, title, description FROM dm.service_features WHERE service_id = ?`,
                [service.id]
            );
            service.features = features;
        }
        return services;
    }

    // Get service by ID with features
    async getServiceById(id) {
        const db = await connectionPromise;
        const [services] = await db.query(`SELECT * FROM dm.services WHERE id = ?`, [id]);
        if (!services.length) return null;

        const service = services[0];
        const [features] = await db.query(
            `SELECT id, title, description FROM dm.service_features WHERE service_id = ?`,
            [id]
        );
        service.features = features;
        return service;
    }

    // Get service by slug with features
    async getServiceBySlug(slug) {
        const db = await connectionPromise;
        const [services] = await db.query(`SELECT * FROM dm.services WHERE slug = ?`, [slug]);
        if (!services.length) return null;

        const service = services[0];
        const [features] = await db.query(
            `SELECT id, title, description FROM dm.service_features WHERE service_id = ?`,
            [service.id]
        );
        service.features = features;
        return service;
    }

    // Add individual feature to a service
    async addFeature(serviceId, featureData) {
        const db = await connectionPromise;
        const { title, description } = featureData;
        const [result] = await db.query(
            `INSERT INTO dm.service_features (service_id, title, description) VALUES (?, ?, ?)`,
            [serviceId, title, description]
        );
        return result.insertId;
    }

    // Update a specific feature
    async updateFeature(featureId, data) {
        const db = await connectionPromise;
        const { title, description } = data;
        const [result] = await db.query(
            `UPDATE dm.service_features SET title = ?, description = ? WHERE id = ?`,
            [title, description, featureId]
        );
        return result.affectedRows > 0;
    }

    // Delete a specific feature
    async deleteFeature(featureId) {
        const db = await connectionPromise;
        const [result] = await db.query(`DELETE FROM dm.service_features WHERE id = ?`, [featureId]);
        return result.affectedRows > 0;
    }
}

module.exports = ServiceService;
