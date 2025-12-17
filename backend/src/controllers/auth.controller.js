exports.signup = (req, res) => {
    res.json({
        message: "Singup controller hit",
        body: req.body,
    });
};

exports.login = (req, res) => {
    res.json({
        message: "Login controller hit",
        body: req.body,
    });
};