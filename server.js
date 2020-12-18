const express = require('express');

const app = express();

app.use(express.json());
// defining routes here, instead of routes folder

let Todos = [
    {
        name: 'My first todo',
        id: 0,
        createdAt: 'Long ago',
        completed: false
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
        completed: false
    }
]


app.get("/todos", (req, res) => {
    res.send(Todos)
    console.log(Todos)

});

app.get("/todos/:id", (req, res) => {
    const todo = Todos.find(todo => todo.id === Number(req.params.id));
    return res.json(todo); 
});

app.patch("/todos/:id", (req, res) => {
    let { id } = req.params;

    Todos.map((todo => {
        if (!todo.id === id) {
            res.status(404);
        } else {
            todo.completed = !todo.completed
            return res.json(todo)
        }
    }))
});

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`App is running on port ${PORT}`))