const ContactService = require('../services/contact.service');

class ContactController {
    constructor() {
        this.contact_svc = new ContactService();
    }

    getAllContacts = async (req, res, next) => {
        try {
            const contacts = await this.contact_svc.getAllContacts();
            res.json({
                result: contacts,
                status: true,
                msg: "Contacts fetched successfully"
            });
        } catch (error) {
            console.log("Error fetching contacts:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };
    getContactById = async (req, res, next) => {
        try {
            const contactId = req.params.id;
            const contact = await this.contact_svc.getContactById(contactId);
            if (!contact) {
                return next({
                    status: 404,
                    msg: "Contact not found"
                });
            }
            res.json({
                result: contact,
                status: true,
                msg: "Contact fetched successfully"
            });
        } catch (error) {
            console.log("Error fetching contact:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };
    createContact = async (req, res, next) => {
        try {
            const data = req.body;
            const validationError = this.contact_svc.contactValidate(data);
            if (validationError) {
                return next({
                    status: 400,
                    msg: validationError
                });
            }
            const contact = await this.contact_svc.createContact(data);
            res.json({
                result: contact,
                status: true,
                msg: "Contact created successfully"
            });
        } catch (error) {
            console.log("Error creating contact:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };
    deleteContact = async (req, res, next) => {
        try {
            const contactId = req.params.id;
            const deleted = await this.contact_svc.deleteContact(contactId);
            if (!deleted) {
                return next({
                    status: 404,
                    msg: "Contact not found"
                });
            }
            res.json({
                status: true,
                msg: "Contact deleted successfully"
            });
        } catch (error) {
            console.log("Error deleting contact:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };
    updateContact = async (req, res, next) => {
        try {
            const contactId = req.params.id;
            const data = req.body;
            const validationError = this.contact_svc.contactValidate(data);
            if (validationError) {
                return next({
                    status: 400,
                    msg: validationError
                });
            }
            const contact = await this.contact_svc.updateContact(contactId, data);
            res.json({
                result: contact,
                status: true,
                msg: "Contact updated successfully"
            });
        } catch (error) {
            console.log("Error updating contact:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };
}
module.exports = ContactController;