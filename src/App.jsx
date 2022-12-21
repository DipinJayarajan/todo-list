import { useState } from 'react'
import './App.css'
import CustomForm from './components/CustomForm'

function App() {
  const [count, setCount] = useState(0)

  const addTask = (task) => {
    console.log(task)
  }

  return (
    <div className="App">
      <div className='container'> 
      <header>
        <h2>My Task List</h2>
      </header>
      </div>
      <CustomForm addTask={addTask} />
    </div>
  )
}

export default App
