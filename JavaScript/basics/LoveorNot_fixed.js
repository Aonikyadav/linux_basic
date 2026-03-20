import express from 'express';
const app = express();

app.use(express.json()); // Body parser first

const students = {
    name: "Agni",
    class: "Third",
    section: "G",
    "roll no.": 17
};

const notes = [];

app.use((req, res, next) => {
    console.log("This is my 1st middleware");
    next();
});

app.get("/", (req, res) => {
    res.send("Hello this is my home page");
});

app.post("/notes", (req, res) => {
    console.log(req.body);
    notes.push(req.body);
    res.status(201).json({ message: "Note added", notes });
});

app.listen(3000, () => {
    console.log("My server is running on port 3000");
});

