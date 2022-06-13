import './App.css';
import React, {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {name: 'dishes', priority: 'low'},
    {name: 'shopping', priority: 'high'},
    {name: 'tidy', priority: 'low'}
  ]);

  const [newTask, setNewTask] = useState('');
  const [newPriority, setNewPriority] = useState('low');

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  }

  const handleRadioButtons = (event) => {
    setNewPriority(event.target.value);
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({name: newTask, priority: newPriority});
    setTasks(copyTasks);
    setNewTask("")
  }

  const showTaskList = tasks.map((task, index) => {
    return (
      <li key={index} className={task.priority === 'high' ? 'high-priority' : 'low-priority'}>
        <span>{task.name}</span>
        <span></span>
        {task.priority === 'high' ? <span className='high-priority'>High</span> : <span className='low-priority'>Low</span>}
      </li>
    );
  });

  return (
    <div className="App">

      <h1>ToDo</h1>
      <form onSubmit={saveNewTask}>
        <input id="new-task" type="text" placeholder="Enter a new task" value={newTask} onChange={handleTaskInput}/>
        <input type="radio" name="priority" value="low" onChange={handleRadioButtons} checked={newPriority === 'low'}/><span>Low</span>
        <input type="radio" name="priority" value="high" onChange={handleRadioButtons} checked={newPriority === 'high'}/><span>High</span> 
        <input type='submit' value="Save New Task"/>
      </form>

      <ul>
        {showTaskList}
      </ul>

    </div>
  );
}

export default App;
