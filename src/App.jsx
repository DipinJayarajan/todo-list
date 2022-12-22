import { useState } from 'react'

import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(task => task.id !== id))
  }

  return (
    <div className="App">
      <div className='container'> 
      <header>
        <h2>My Task List</h2>
      </header>
      </div>
      <CustomForm addTask={addTask} />
      {tasks && <TaskList 
                tasks={tasks} 
                deleteTask={deleteTask}
                />}
    </div>
  )
}

export default App
