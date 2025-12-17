const express = require("express");
const router = express.Router();

const { authenticate } = require("../middleware/auth.middleware");

const authController = require("../controllers/auth.controller");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.get("/me", authenticate, (req, res) => {
    res.json({
        message: "Protected route accessed",
        user: req.user,
    });
});

module.exports = router;