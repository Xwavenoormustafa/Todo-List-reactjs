import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState(''); // State for the current task input
  const [tasks, setTasks] = useState([]); // State to store all tasks

  // Function to handle adding a new task
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask(''); // Clear the input after adding the task
    }
  };

  // Function to toggle the task's completion status
  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>ToDo List App</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>Add Task</button>
      </div>
      <ul style={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.taskItem}>
            <span
              onClick={() => toggleComplete(task.id)}
              style={{
                ...styles.taskText,
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} style={styles.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
// Inline CSS styles
const styles = {
    container: {
      maxWidth: '500px',
      margin: '0 auto',
      textAlign: 'center',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#f3f3f3',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      color: '#333',
      marginBottom: '20px',
    },
    inputContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      marginRight: '10px',
    },
    addButton: {
      padding: '10px 20px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    taskList: {
      listStyle: 'none',
      padding: 0,
    },
    taskItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#fff',
      marginBottom: '10px',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    taskText: {
      cursor: 'pointer',
      fontSize: '18px',
    },
    deleteButton: {
      padding: '5px 10px',
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
  
  export default App;