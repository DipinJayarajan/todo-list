import React, { useState } from 'react';
import { useEffect } from 'react';


const EditForm = ( { editedTask, updateTask, closeEditMode } ) => {

    //Library for the input field
    const [updatedTaskName , setUpdatedTaskName] = useState(editedTask.name)

    useEffect(() => {

        const closeModalEscaped = (e) => {
            e.key === 'Escape' && closeEditMode();
        }

        window.addEventListener('keydown',closeModalEscaped)

        return () => {
            window.removeEventListener('keydown',closeModalEscaped)
        }
    },[closeEditMode])

    const handleFormsSubmit = (event) => {
    event.preventDefault()  // Prevents the default behavior of the browser
    updateTask({...editedTask ,name: updatedTaskName})
    
    }
  return (
    <div 
    role="dialog" 
    aria-labelledby='editTask'
    onClick={(e) => { e.target === e.currentTarget && closeEditMode()}}
    >
    <form 
    className='todo'
    onSubmit={handleFormsSubmit}
    >
       
        <div className="wrapper">
            <input type="text" 
            id='editTask'
            className='input'
            value={updatedTaskName}
            onInput={e => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder='Update task'
            />
            <label 
            style={{fontSize: "20px"}} 
            htmlFor='editTask'
            className='label'
            >Update the Task</label>
        </div>
        <button 
        aria-label={`Confirm edited task to now read ${updatedTaskName}`}
        type='submit'
        className='btn'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
            </svg>
        </button>
    </form>
    </div>
  )
}

export default EditForm;