import express from 'express';
const router = express.Router();

const notes = [];
const students = {
    name: "aonik",
    class: "Third",
    section: "G",
    "roll no.": 17
};

router.get("/", (req, res) => {
    res.send("Hello this is my home page");
});

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
    notes.push({ id: notes.length, ...req.body });
    res.status(201).json({ message: "Note added", notes });
});

router.get("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const note = notes.find(n => n.id === id);
    if (note) {
        res.json(note);
    } else {
        res.status(404).json({ message: "Note not found" });
    }
});

router.delete("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
        res.json({ message: "Note deleted", notes });
    } else {
        res.status(404).json({ message: "Note not found" });
    }
});

router.put("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes[index] = { id, ...req.body };
        res.json({ message: "Note updated", notes });
    } else {
        res.status(404).json({ message: "Note not found" });
    }
});

router.patch("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes[index] = { ...notes[index], ...req.body };
        res.json({ message: "Note updated", notes });
    } else {
        res.status(404).json({ message: "Note not found" });
    }
});

router.get("/students", (req, res) => {
    res.json(students);
});

export default router;

