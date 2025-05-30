const express = require("express");
const router = express.Router();
const ServiceController = require("../app/controllers/services.controller");
const service_ctrl = new ServiceController();
const loginCheck = require("../app/middleware/auth.middleware");
const uploader = require("../app/middleware/file-upload.middleware");
const role = require("../app/middleware/rbac.middlware");

const setDestination = (req, res, next) => {
  req.dest = "services";
  next();
};

router.post(
  "/",
  loginCheck,
  role.isAdmin,
  setDestination,
  uploader.single("icon_url"), 
  service_ctrl.addService
);


// Get all services WITH features
router.get("/", service_ctrl.getAllServices);

// Get service by ID
router.get("/:id", service_ctrl.getServiceById);

// Get service by slug
router.get("/slug/:slug", service_ctrl.getServiceBySlug);

// Create service
// router.post(
//   "/",
//   loginCheck,
//   role.isAdmin,
//   setDestination,
//   uploader.single("image"),
//   service_ctrl.createService
// );

// Update service
router.put(
  "/:id",
  loginCheck,
  role.isAdmin,
  setDestination,
  uploader.single("image"),
  service_ctrl.updateService
);

// Delete service
router.delete(
  "/:id",
  loginCheck,
  role.isAdmin,
  service_ctrl.deleteService
);

module.exports = router;
