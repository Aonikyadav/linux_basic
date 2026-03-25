const tokens = "Ayush";

const Checktoken = (req, res, next) => {
    console.log(req.query.token);
    if (req.query.token === "" || req.query.token === undefined) {
        return res.send({ status: 0, msg: "token is required" });
    }
    if (req.query.token !== tokens) {
        return res.send({ status: 0, msg: "token is invalid please provide a valid token" });
    }
    next();
};

module.exports = Checktoken;

