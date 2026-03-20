import express from 'express';
const app = express();
app.use(express.json());

const books = [];

app.post('/books', (req, res) => {
  const newBook = { id: books.length, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.get('/books', (req, res) => {
  res.json(books);
});

app.put('/books/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < books.length) {
    books[index] = { id: index, ...req.body };
    res.json(books[index]);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

app.patch('/books/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < books.length) {
    books[index].title = req.body.title;
    res.json(books[index]);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

app.delete('/books/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < books.length) {
    books.splice(index, 1);
    res.status(200).json({ message: 'Book deleted' });
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

app.listen(4002, () => console.log('Book Library API on port 4002'));

