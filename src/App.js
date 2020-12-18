import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    const response = await fetch(`http:/localhost:8000/todos`);
    const result = await response.json();
    
    console.log(result)
    setTodos(result);
  }

  useEffect(() => {
    fetchTodos();
  }, [])

  return (
    <div className="App" style={{}}>
      {JSON.stringify(todos)}
    </div>
  );

}

export default App;
