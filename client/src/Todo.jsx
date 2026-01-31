
import React, { useState } from "react";
import "./Todo.css";

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const markComplete = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: true } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <marquee behavior="" direction="left">
        <b>This is Todo list</b>
      </marquee>
      <h2>Todo List</h2>
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index} className={t.completed ? "completed" : ""}>
            {t.text}
            {!t.completed && (
              <button onClick={() => markComplete(index)}>✅ Complete</button>
            )}
            <button onClick={() => deleteTask(index)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


