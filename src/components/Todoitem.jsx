import React, { useState } from "react";
import styles from "./todo.module.css";
const TodoItem = ({ el, onDelete }) => {
  const [isCompleated, setIsCompleated] = useState(el.isCompleated);
  return (
    <div className={styles.todo} key={el.id}>
      <div className={styles.item}>
        <input
          type="checkbox"
          checked={isCompleated}
          onChange={(e) => {
            setIsCompleated(e.target.checked);
          }}
        />
        <div className={isCompleated ? styles.stricked : ""}> {el.value} </div>
      </div>

      <button onClick={() => onDelete(el.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
