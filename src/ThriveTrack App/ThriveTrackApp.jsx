import React, { useState } from 'react';
import "./ThriveTracks.css"

function Tasks() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [assignedPerson, setAssignedPerson] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [reminderDate, setReminderDate] = useState('');

  const [subTasks, setSubTasks] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [editMode, setEditMode] = useState(false);
  const [editTaskIndex, setEditTaskIndex] = useState(null);

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

    if (editMode) {
      const updatedTasks = [...tasks];
      updatedTasks[editTaskIndex] = {
        title: taskTitle,
        description: taskDescription,
        assignedPerson: assignedPerson,
        dueDate: dueDate,
        reminderDate: reminderDate,
        subTasks: subTasks,
      };
      setTasks(updatedTasks);
      setEditMode(false);
    }
    else {
      const newTask = {
        title: taskTitle,
        description: taskDescription,
        assignedPerson: assignedPerson,
        dueDate: dueDate,
        reminderDate: reminderDate,
        subTasks: subTasks,
      };
      setTasks(prevTasks => [...prevTasks, newTask]);
    }

    resetForm();
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTaskTitle(taskToEdit.title);
    setTaskDescription(taskToEdit.description);
    setDueDate(taskToEdit.dueDate);
    setReminderDate(taskToEdit.reminderDate);
    setSubTasks(taskToEdit.subTasks);
    setEditMode(true); // Switch to edit mode
    setEditTaskIndex(index); // Remember the index of the task being edited
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
    setEditMode(false);
    setEditTaskIndex(null);
  };

  return (
    <>
      <div className='taskPage'>
        <h1>{editMode ? '' : ''}</h1>

        <form onSubmit={handleCreateTask}>
          <input
            type="text"
            value={taskTitle}
            className='taskTitle'
            placeholder="Task Title"
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <input
            type="text"
            value={taskDescription}
            className='taskDetails'
            placeholder="Description"
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <div className='assign'>
            <label htmlFor="assignedPerson">Assign To</label>
            <select
              id="assignedPerson"
              className='assignTeam'
              value={assignedPerson}
              onChange={(e) => setAssignedPerson(e.target.value)}
            >
              <option value="">Assign</option>
              <option value="Person 1">Person 1</option>
              <option value="Person 2">Person 2</option>
            </select>
          </div>
          <div className='dates'>
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              value={dueDate}
              className='dueDate'
              onChange={(e) => setDueDate(e.target.value)}
            />
            <input
              type="datetime-local"
              value={reminderDate}
              className='reminder'
              onChange={(e) => setReminderDate(e.target.value)}
            />
          </div>

          <h3></h3>
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
          <button type="button" className='subTaskBtn' onClick={addSubTask}>+ Add Sub Task</button>

          <button type="submit" className='createEditBtn'>{editMode ? 'Update Task' : 'Create Task'}</button>
          <button type="button" onClick={resetForm}>Cancel</button>
        </form>

        <h2></h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>{task.assignedPerson}</p>
              <p>Due Date: {task.dueDate}</p>
              <p>Reminder Date: {task.reminderDate}</p>

              {task.subTasks.length > 0 && (
                <ul>
                  {task.subTasks.map((subTask, subIndex) => (
                    <li key={subIndex}>{subTask}</li>
                  ))}
                </ul>
              )}
              <button type="button" onClick={() => handleEditTask(index)}>Edit</button>
              <button type="button" onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}



export default Tasks;
