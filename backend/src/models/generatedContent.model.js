const mongoose = require("mongoose");

const generatedContentSchema = new mongoose.Schema(
    {
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
            required: true,
            unique: true,
        },
        videoUrl: {
            type: String,
            required: true,
        },
        steps: [
            {
                stepNumber: Number,
                text: String,
                screenshotUrl: String,
            },
        ],
        script: {
            type: String,
        },
    },
    { timestamps: true }
);


module.exports = mongoose.model("GeneratedContent", generatedContentSchema);