import React from 'react'
import TodoItem from './Todoitem'
const TodoList = ({todos,onDelete}) => {
  return (
    <div className="list">
           {todos.map((el) => (
           <TodoItem key={el.id} el={el} onDelete={onDelete} />
           ))}
      </div>
  )
}

export default TodoList