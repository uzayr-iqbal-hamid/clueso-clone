const express = require("express")
const authRoutes = require("./routes/auth.routes");
const projectRoutes = require("./routes/project.routes");
const processingRoutes = require("./routes/processing.routes");

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Clueso backend is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/process", processingRoutes);

module.exports = app;