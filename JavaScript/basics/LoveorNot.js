import express from 'express';
const app = express();

app.use(express.json());

const students = {
    name: "aonik",
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
    notes.push({ id: notes.length, ...req.body });
    res.status(201).json({ message: "Note added", notes });
});

app.get("/notes", (req, res) => {
    res.json(notes);
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.delete("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
        res.status(200).json({ message: "Note deleted", notes });
    } else {
        res.status(404).json({ message: "Note not found" });
    }
});

app.put("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes[index] = { id, ...req.body };
        res.status(200).json({ message: "Note updated", notes });
    } else {
        res.status(404).json({ message: "Note not found" });
    }
});

app.patch("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes[index] = { ...notes[index], ...req.body };
        res.status(200).json({ message: "Note updated", notes });
    } else {
        res.status(404).json({ message: "Note not found" });
    }
});

app.listen(3000, () => {
    console.log("My server is running on port 3000");
});
