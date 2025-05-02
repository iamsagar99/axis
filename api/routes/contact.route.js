const express = require('express');
const router = express.Router();

const loginCheck = require('../app/middleware/auth.middleware');
const role = require('../app/middleware/rbac.middlware');

const ContactController = require('../app/controllers/contact.controller');
const contact_ctrl = new ContactController();

router.route('/')
    .get(contact_ctrl.getAllContacts)
    .post(
        loginCheck,
        role.isAdminEditor,
        contact_ctrl.createContact
    );
router.route('/:id')
    .get(contact_ctrl.getContactById)
    .put(
        loginCheck,
        role.isAdminEditor,
        contact_ctrl.updateContact
    )
    .delete(
        loginCheck,
        role.isAdmin,
        contact_ctrl.deleteContact
    );


module.exports = router;