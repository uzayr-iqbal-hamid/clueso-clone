const jwtService = require("../services/jwt.service");

exports.signup = (req, res) => {

    const { email } = req.body;

    // user 1 ex.
    const user = {
        id: "user1",
        email,
    };

    const token = jwtService.generateToken(user);

    res.json({
        message: "Signup successful",
        token,
    })
};

exports.login = (req, res) => {

    const { email } = req.body;

    const user = {
        id: "user1",
        email,
    };

    const token = jwtService.generateToken(user);

    res.json({
        message: "Login successful",
        token,
    });
};