const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const jwtService = require("../services/jwt.service");


// signup logic 
exports.signup = async (req, res) => {

    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return req.status(400).json({ message: "User already exists" });
    }

    // password hashing done here
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        password: hashedPassword,
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

// login logic
exports.login = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return req.status(401).json({ message: "Invalid credentials" });
    }

    // password verification is done here
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
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