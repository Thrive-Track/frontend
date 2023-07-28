import React, { useState } from 'react';

function TodoList() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [reminderDate, setReminderDate] = useState('');

  const [subTasks, setSubTasks] = useState([]);
  const [tasks, setTasks] = useState([]);

  const addSubTask = () => {
    setSubTasks(prevSubTasks => [...prevSubTasks, '']);
  };

  const handleSubTaskChange = (index, value) => {
    const updatedSubTasks = [...subTasks];
    updatedSubTasks[index] = value;
    setSubTasks(updatedSubTasks);
  };

  const deleteSubTask = (index) => {
    const updatedSubTasks = [...subTasks];
    updatedSubTasks.splice(index, 1);
    setSubTasks(updatedSubTasks);
  };

  const handleCreateTask = (event) => {
    event.preventDefault();

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      dueDate: dueDate,
      reminderDate: reminderDate,
      subTasks: subTasks
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
    resetForm();
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const resetForm = () => {
    setTaskTitle('');
    setTaskDescription('');
    setDueDate('');
    setReminderDate('');
    setSubTasks([]);
  };

  return (
    <div>
      <h1>To-Do List</h1>

      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          value={taskTitle}
          placeholder="Task Title"
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <input
          type="text"
          value={taskDescription}
          placeholder="Task Description"
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <input
          type="datetime-local"
          value={reminderDate}
          onChange={(e) => setReminderDate(e.target.value)}
        />

        <h3>Sub Tasks</h3>
        <div>
          {subTasks.map((subTask, index) => (
            <div key={index}>
              <input
                type="text"
                value={subTask}
                placeholder={`Sub Task ${index + 1}`}
                onChange={(e) => handleSubTaskChange(index, e.target.value)}
              />
              <button type="button" onClick={() => deleteSubTask(index)}>Delete</button>
            </div>
          ))}
        </div>
        <button type="button" onClick={addSubTask}>Add Sub Task</button>

        <button type="submit">Create Task</button>
        <button type="button" onClick={resetForm}>Cancel</button>
      </form>

      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Reminder Date: {task.reminderDate}</p>

            {task.subTasks.length > 0 && (
              <ul>
                {task.subTasks.map((subTask, subIndex) => (
                  <li key={subIndex}>{subTask}</li>
                ))}
              </ul>
            )}

            <button type="button" onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
