import express from 'express';
const app = express();
app.use(express.json());

const todos = [];

app.post('/todos', (req, res) => {
  const newTodo = { id: todos.length, task: req.body.task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.put('/todos/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < todos.length) {
    todos[index] = { id: index, task: req.body.task };
    res.json(todos[index]);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.patch('/todos/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < todos.length) {
    todos[index].task = req.body.task;
    res.json(todos[index]);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.delete('/todos/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < todos.length) {
    todos.splice(index, 1);
    res.status(200).json({ message: 'Todo deleted' });
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.listen(4000, () => console.log('Todo API on port 4000'));

