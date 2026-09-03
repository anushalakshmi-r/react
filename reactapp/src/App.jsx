import { useState } from "react";
function TodoList() {
 const [todos, setTodos] = useState([
  { id: 1, task: "Learn React", completed: false },
 { id: 2, task: "Build a project", completed: true },
 ]);
 const toggleComplete = (id) => {
 setTodos(
 todos.map((todo) =>
 todo.id === id ? { ...todo, completed: !todo.completed } : todo
 )
 );
 };
 return (
 <ul>
 {todos.map((todo) => (
 <li
 key={todo.id}
 style={{ textDecoration: todo.completed ? "line-through" : "none" }}
 onClick={() => toggleComplete(todo.id)}
 >
 {todo.task}
 </li>
 ))}
 </ul>
 );
}