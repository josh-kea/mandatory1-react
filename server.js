const express = require('express');
const path = require('path');

const app = express();

// defining routes here, instead of routes folder

const Todos = [
    {
        name: 'My first todo',
        id: 0,
        createdAt: 'Now',
        completed: 'no'
    }
]


app.get("/todos", (req, res) => {
    res.send(Todos)
    console.log(Todos)

});
app.put("/todos/:id", (req, res) => {
    const id = req.params.id;
    res.send(id)
    console.log(id)

    
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`App is running on port ${PORT}`))