const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// defining routes here, instead of routes folder

let Todos = [
    {
        name: 'My first todo',
        id: 0,
        createdAt: 'Long ago',
        completed: true
    },
    {
        name: 'My second todo',
        id: 1,
        createdAt: 'Earlier',
        completed: false
    },
    {
        name: 'My third todo',
        id: 2,
        createdAt: 'Now',
        completed: true
    }
]

let todoAutoIncrement = 2;


app.get("/todos", (req, res) => {
    res.json(Todos);

});

app.post("/create", (req, res) => {
    const { name } = req.body;

    let newTodo = req.body;
    newTodo.id = ++todoAutoIncrement
    newTodo.completed = false
    newTodo.createdAt = 'Right now'
    newTodo.name = name;
    Todos.push(newTodo);

    // console.log(req.body.name)

    return res.send({ data: newTodo });
});

app.delete("/todos/:id", (req, res) => {
    let { id } = req.params;

    Todos = Todos.filter(todo => todo.id !== Number(id));

    // console.log(req.body.name)

    return res.send({ data: null });
});

app.get("/todos/:id", (req, res) => {
    const todo = Todos.find(todo => todo.id === Number(req.params.id));
    return res.json(todo);
});

app.patch("/todos/:id", (req, res) => {
    let { id } = req.params;

    const todo = Todos.find(todo => todo.id === Number(req.params.id));

    todo.completed = !todo.completed;

    return res.json(Todos)

});

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`App is running on port ${PORT}`))