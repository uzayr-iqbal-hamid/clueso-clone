const express = require("express");
const router = express.Router();

const { authenticate } = require("../middleware/auth.middleware");
const projectController = require("../controllers/project.controller");

// POST (create a new project)
router.post("/", authenticate, projectController.createProject);

// GET (all projects)
router.get("/", authenticate, projectController.getProjects);

// GET (project by ID)
router.get("/:id", authenticate, projectController.getProjectById);

module.exports = router;