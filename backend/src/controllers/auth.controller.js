const User = require("../models/user.model");
const jwtService = require("../services/jwt.service");


// signup logic (#TODO: add hashing)
exports.signup = async (req, res) => {

    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return req.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
        email,
        password,
    });

    const token = jwtService.generateToken({
        id: user._id,
        email: user.email,
    });

    res.status(201).json({
        message: "Signup successful",
        token,
    });
};

// login logic (#TODO: add hashing)
exports.login = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return req.status(401).json({ message: "Invalid credentials" });
    }

    if (user.password != password) {
        return req.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwtService.generateToken({
        id: user._id,
        email: user.email,
    });

    res.json({
        message: "Login successful",
        token,
    });
};