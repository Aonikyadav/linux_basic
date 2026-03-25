import express from 'express';
import notesRouter from './routes/routes.js';

const app = express();

app.use(express.json());
app.use(notesRouter);

app.listen(3000, () => {
    console.log("My server is running on port 3000");
});

