const express = require("express");
const router = express.Router();

const { authenticate } = require("../middleware/auth.middleware");
const processingController = require("../controllers/processing.controller");

router.post("/:projectId", authenticate, processingController.processProject);

module.exports = router;