const Project = require("../models/project.model");
const GeneratedContent = require("../models/generatedContent.model");
const aiMockService = require("../services/aiMock.service");


exports.processProject = async (req, res) => {
    const { projectId } = req.params;

    const project = await Project.findOne({
        _id: projectId,
        owner: req.user.id,
    });

    if (!project) {
        return res.status(404).json({ message: "Project not found" });
    }

    if (project === "ready") {
        return res.status(400).json({ message: "Project already processed" });
    }

    project.status = "processing";
    await project.save();

    const result = await aiMockService.runMockProcessing(project.title);

    const content = await GeneratedContent.create({
        project: project._id,
        videoUrl: result.videoUrl,
        script: result.script,
        steps: result.steps,
    });

    project.status = "ready";
    await project.save();

    res.json({
        message: "Project processed successfully",
        project,
        content,
    });
};