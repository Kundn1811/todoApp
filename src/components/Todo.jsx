import React from "react";
import styles from "./todo.module.css"

import TodoList from "./TodoList";
let Todo = () => {
  let [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const onDelete = (id) => {
    let newTodos = todos.filter((element) => element.id !== id);
    setTodos(newTodos);
  };
  return (
    <div className={styles.parent_div}>
      <h1>Todo</h1>
      <input
      placeholder="Write Here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDownCapture={(e) => {
          if (e.key === "Enter") {
            setTodos([
              ...todos,
              { id: Date.now(), value: value, isCompleated: false },
            ]);
            setValue("");
          }
        }}
      />
      <button
        onClick={() => {
          setTodos([
            ...todos,
            { id: Date.now(), value: value, isCompleated: false },
          ]);
          setValue("");
        }}
      >
        Add
      </button>
      {/* <div className="list">
           {todos.map((el) => (
           <Todoitem key={el.id} el={el} onDelete={onDelete} />
           ))}
      </div> */}
       <TodoList todos={todos} onDelete={onDelete}/>
    </div>
  );
};

export default Todo;
