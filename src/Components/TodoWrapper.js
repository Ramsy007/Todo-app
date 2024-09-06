import React, { useState } from 'react'
import EditTodoForm from './EditTodoForm';
import TodoForm from './TodoForm';
import {v4 as uuidv4} from "uuid";
import Todo from './Todo'; 
function TodoWrapper() {
    
  const [todos,setTodos]=useState([]);
  // add todo 
  const addTodo=(todo)=>{
    setTodos([
        ...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false},

    ]);


  }
  // Delete Todo
  const deleteTodo=(id)=>setTodos(todos.filter((todo)=>todo.id!==id));
  // toggle complete todo
  const toggleComplete=(id)=>{
     setTodos(
        todos.map((todo)=>todo.id===id ? {...todo,completed:!todo.completed}:todo))
     
  }

  // edit Todo 
  const editTodo=(id)=>{
    setTodos(
        todos.map((todo)=>todo.id===id ? {...todo,isEditing:!todo.isEditing}:todo)
    )
  }
 
  // Edit Task Todo
  const editTask = (task, id) => {
    setTodos(
        todos.map((todo)=> todo.id === id ? {...todo, task, isEditing:!todo.isEditing} : todo)
    )
}

return (
    <div className="TodoWrapper">
        <h1>Web Development Tasks!</h1>
        <TodoForm addTodo={addTodo}/>

        {/* Display Todos */}
        {todos.map((todo)=> todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo}/>
        ) : (
            <Todo 
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
            />
        )
    )}
    </div>
  )


}

export default TodoWrapper;