const Project = require("../models/project.model");
const GeneratedContent = require("../models/generatedContent.model");

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

exports.getProjectById = async (req, res) => {
    const { id } = req.params;

    const project = await Project.findOne({
        _id: id,
        owner: req.user.id,
    });

    if (!project) {
        return res.status(404).json({ message: "Project not found" });
    }

    const content = await GeneratedContent.findOne({
        project: project._id,
    });

    res.json({
        project,
        content,
    });
};