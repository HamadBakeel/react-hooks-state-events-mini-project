import React from "react";

function Task({category, text, onDeleteTask}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button
          className="delete"
          data-text={text}
          onClick={onDeleteTask}
      >X</button>
    </div>
  );
}

export default Task;
