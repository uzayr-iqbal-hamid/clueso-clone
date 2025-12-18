const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        status: {
            type: String,
            enum: ["created", "processing", "ready"],
            default: "created",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);