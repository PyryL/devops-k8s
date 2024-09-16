const express = require('express');

const app = express();

let todos = [
  'todo 1',
  'todo 2',
];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', express.json(), (req, res) => {
  const todo = req.body.todo;

  if (todo.length > 140) {
    console.log('blocked too long new todo', todo);
    return res.sendStatus(400);
  }

  console.log('created new todo', todo);

  todos.push(todo);
  res.json(todo);
});

app.listen(process.env.PORT || 8080);
