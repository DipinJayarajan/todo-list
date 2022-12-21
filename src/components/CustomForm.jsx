import React, { useState } from 'react';


const CustomForm = ( {addTask} ) => {

    //Library for the input field
    const [task, setTask] = useState('')

    const handleFormsSubmit = (event) => {
    event.preventDefault()  // Prevents the default behavior of the browser
    setTask('')
    addTask({
      name : task,
      checked: false,
      id: Date.now()
    })
    }
  return (
    <form 
    className='todo'
    onSubmit={handleFormsSubmit}
    >
       
        <div className="wrapper">
            <input type="text" 
            id='task'
            className='input'
            value={task}
            onInput={e => setTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder='Add a task'
            />
            <label 
            style={{fontSize: "20px"}} 
            htmlFor='task'
            className='label'
            >Enter the Task</label>
        </div>
        <button 
        aria-label='Add task'
        type='submit'
        className='btn'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
            </svg>
        </button>
    </form>
  )
}

export default CustomForm