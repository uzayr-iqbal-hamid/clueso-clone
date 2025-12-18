const express = require("express")
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const projectRoutes = require("./routes/project.routes");

const processingRoutes = require("./routes/processing.routes");

const app = express()

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// to parse JSON body
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Clueso backend is running");
});


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/process", processingRoutes);

module.exports = app;