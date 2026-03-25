const mypass = "12345";

const Checkpass = (req, res, next) => {
    if (req.query.pass === "" || req.query.pass === undefined) {
        return res.send({
            status: 0,
            msg: "please fill this password"
        });
    }
    if (req.query.pass != mypass) {
        return res.send({
            status: 0,
            msg: "please enter the correct password"
        });
    }
    next();
};

module.exports = Checkpass;

