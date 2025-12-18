const Project = require("../models/project.model");

exports.createProject = async (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ message: "Project title is required" });
    }

    const project = await Project.create({
        title,
        owner: req.user.id,
    });

    res.status(201).json({
        message: "Project created",
        project,
    });
};

exports.getProjects = async (req, res) => {
    const projects = await Project.find({ owner: req.user.id }).sort({
        createdAt: -1,
    });

    res.json({ projects });
};