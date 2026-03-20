import express from 'express';
const app = express();
app.use(express.json());

const students = [];

app.post('/students', (req, res) => {
  const newStudent = { id: students.length, ...req.body };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.put('/students/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < students.length) {
    students[index] = { id: index, ...req.body };
    res.json(students[index]);
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});

app.patch('/students/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < students.length) {
    students[index].name = req.body.name;
    res.json(students[index]);
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});

app.delete('/students/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < students.length) {
    students.splice(index, 1);
    res.status(200).json({ message: 'Student deleted' });
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});

app.listen(4001, () => console.log('Student API on port 4001'));

