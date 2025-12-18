const express = require("express");
const router = express.Router();

const { authenticate } = require("../middleware/auth.middleware");
const projectController = require("../controllers/project.controller");

router.post("/", authenticate, projectController.createProject);

router.get("/", authenticate, projectController.getProjects);

module.exports = router;