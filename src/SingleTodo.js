import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai';


const SingleTodo = (props) => {

    const [todo, setTodo] = useState('');

    async function fetchTodo() {
        const response = await fetch(`http://localhost:8000/todos/${props.match.params.id}`);
        const result = await response.json();
        setTodo(result);
    }
    
      useEffect(() => {
        fetchTodo();
      }, [])


    console.log(props)

    return (
        <div style={{ padding: 100, textDecoration: null}}>
            <div><li style={{ textDecoration: null}}>Name: {todo.name} | Completed: {todo.completed? "Yes": "No"} {todo.completed? <AiOutlineCheckCircle/>: <AiOutlineClose/>}</li> <Link to="/">Go Back</Link></div>
        </div>
    )
}

export default SingleTodo;