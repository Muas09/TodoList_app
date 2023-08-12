import React, { useState } from "react";
import styles from './style.module.css';

const Index = ({ activeTab }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, done: false }]);
      setNewTask("");
    }
  };

  const handleToggleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleDeleteAllCompleted = () => {
    const updatedTasks = tasks.filter((task) => !task.done);
    setTasks(updatedTasks);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("thao");
      handleAddTask();
    }
  };

  const filteredTasks =
    activeTab === "completed"
      ? tasks.filter((task) => task.done)
      : activeTab === "active"
      ? tasks.filter((task) => !task.done)
      : tasks;

  return (
    <div className={styles.body}>
      {activeTab !== "completed" && (
        <div className={styles.form}>
          <input 
            type="text"
            id={styles.monthInput}
            className={styles.formControl}
            placeholder="add details"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className={styles.btn} onClick={handleAddTask}>
            Add
          </button>
        </div>
      )}

      {filteredTasks.map((task, index) => (
        <div className={styles.result} key={index}>
          <div
            className={`${styles.checkbox} ${task.done ? styles.checked: ""}`}
            id={styles.checkboxItem}
            onClick={() => handleToggleDone(index)}>
            {task.done && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512">
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            )}
          </div>
          <div
            className={`${styles.textResult} ${task.done ? "done" : ""}`}
            id={styles.textResultItem}>
            {task.text}
          </div>
          {activeTab === "completed" && (
            <div
              className={styles.iconDelete}
              onClick={() => handleDeleteTask(index)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512">
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </div>
          )}
        </div>
      ))}

      {activeTab === "completed" && (
        <div>
          <div className={styles.btnDeleteAll} onClick={handleDeleteAllCompleted}>
            <div className={styles.iconDelete}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512">
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </div>
            <div className={styles.textDelete}>Delete all</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
