import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

 const App = () => {
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    const response = await fetch(`http://localhost:8000/todos`);
    const result = await response.json();

    setTodos(result);
  }

  const [state, setState] = useState({
    // state
    name: '',
  })

  const { name } = state;

  useEffect(() => {
    fetchTodos();
  }, [])

  const handleClick = (todo) => {
    const { id } = todo;
    // updateTodo(todo);
    updateTodo(id)
  }

  const handleDelete = (todo) => {
    const { id } = todo;
    // updateTodo(todo);
    deleteTodo(id)
  }

  function handleChange() {
    return function(event) {
      setState({ ...state, name : event.target.value })
    };
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:8000/create`, { name })
    .then(response => {
      fetchTodos();
      setState({ ...state, name: ''})
    })
    .catch(error => alert('Created todo'))

  }


  async function updateTodo(id) {
    await axios.patch(`http://localhost:8000/todos/${id}`)
    .then(response => {
      fetchTodos();
    })
    .catch(error => alert('Updated todo'))
  }

  async function deleteTodo(id) {
    await axios.delete(`http://localhost:8000/todos/${id}`)
    .then(response => {
      fetchTodos();
    })
    .catch(error => alert('Updated todo'))
  }

  return (
    <div className="App">
      <h1>Todos</h1>
      <form onSubmit={handleSubmit} >
        <p>Add new</p>
        <input value={name} onChange={handleChange()} type="text" placeholder="Todo name" required/>
        <button>Create</button>
      </form>
      <ul>
        { todos.map((todo, i) => {
          return (
            <li key={i}>{todo.name} | Completed: {todo.completed? "Yes": "No"} <button onClick={() => handleClick(todo) }>Update</button><button onClick={() => handleDelete(todo) }>Delete</button></li>
          )
        })}
    </ul>

    </div>
  )
}

export default App;
