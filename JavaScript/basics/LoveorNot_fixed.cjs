const express = require("express");
const Checktoken = require("./checktoken.cjs");
const checkpass = require("./checkpass.cjs");
const app = express();
app.use(express.json());

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

