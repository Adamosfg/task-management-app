const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let tasks = [];

app.get('/', (req, res) => res.send('Simple TODO app'));
app.get('/tasks', (req, res) => res.json(tasks));
app.post('/tasks', (req, res) => {
    tasks.push(req.body);
    res.status(201).send('Task added');
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
