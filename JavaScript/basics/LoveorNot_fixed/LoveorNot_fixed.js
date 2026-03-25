const express = require("express");
const Checktoken = require("./checktoken");
const checkpass = require("./checkpass");
const app = express();
app.use(express.json());

// Commented middleware definitions - create separate files instead
/*
let tokens = "Ayush";
let mypass = "12345";
let Checktoken = (req, res, next) => {
    console.log(req.query.token);
    if (req.query.token === "" || req.query.token === undefined) {
        return res.send({ status: 0, msg: "token is required" });
    }
    if (req.query.token !== tokens) {
        return res.send({ status: 0, msg: "token is invalid please provide a valid token" });
    }
    next();
};
app.use(Checktoken);

let Checkpass = (req, res, next) => {
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
app.use(Checkpass);
*/

app.get("/", (req, res) => {
    res.send({ status: 1, msg: "this is home page API" });
});

app.get("/news", Checktoken, checkpass, (req, res) => {
    res.send({ status: 1, msg: "this is new page API" });
});

app.get("/news/:id", (req, res) => {
    const id = req.params.id;
    res.send("News details API " + id);
});

app.get("/product", (req, res) => {
    res.send({ status: 1, msg: "this is product page API" });
});

app.post("/login", (req, res) => {
    console.log(req.body);
    res.status(200).json({
        status: 1,
        msg: "Login API",
        bodyData: req.body,
        querydata: req.query
    });
});

app.get("/error", (req, res) => {
    throw new Error("this is a error");
});

app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).json({
        status: 0,
        msg: "something went wrong"
    });
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});

