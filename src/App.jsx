import { useState } from 'react'

import CustomForm from './components/CustomForm'
import EditForm from './components/EditForm';
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(task => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(task => task.id === id ? {...task, checked: !task.checked} : task))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => t.id === task.id ? {...t, name: task.name } : t))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
    setPreviousFocusEl(document.activeElement)
  }


  return (
    <div className="App">
      <div className='container'> 
      <header>
        <h2>My Task List</h2>
      </header>
      {
        isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />
        )
      }
      </div>
      <CustomForm addTask={addTask} />
      {tasks && <TaskList 
                tasks={tasks} 
                deleteTask={deleteTask}
                toggleTask={toggleTask} 
                enterEditMode={enterEditMode}
                />}
    </div>
  )
}

export default App
