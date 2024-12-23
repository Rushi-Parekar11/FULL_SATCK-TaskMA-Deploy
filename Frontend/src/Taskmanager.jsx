import React, { useEffect, useState } from 'react'
import { FaCheck,FaPen,FaSearch,FaPlus,FaTrash } from "react-icons/fa";
import Task from './Task';
import { CreateTask, DeleteTaskById,UpdateTask } from './api';
import { ToastContainer, toast } from 'react-toastify';
import { API_URL } from './utils';
import 'react-toastify/dist/ReactToastify.css';



function Taskmanager() {
const [input,setinput]=useState('');
const [alltask, setalltask] = useState([]);
const [copytask,setcopytask]=useState([]);
const [isUpdating, setIsUpdating] = useState(false);
const [currentTaskId, setCurrentTaskId] = useState(null);



const handleAddTask = async () => {
  if (!input.trim()) {
    toast.error("task is empty !")
    return;
  }

  const obj = {
    taskname: input,
    isDone: false,
  };
  try {
    const data = await CreateTask(obj);
    FetchAllData();
    if (data) {
      toast.success( "Task added successfully!");
      console.log(data)
      setinput(""); 
    } else {
      toast.error("Failed to add task.");
    }
  } catch (error) {
    console.error("Error in TaskManager.jsx:", error);
    toast.error("An error occurred. Please try again.");
  }
};


////////////FETCH ALL TASKS
const FetchAllData = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    setalltask(data);  
    setcopytask(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
useEffect(() => {
  FetchAllData();
}, []); 


////DELETE THE TASK BY ID 
const handelDeletTask= async(id)=>{
try {
  console.log(id)
  const data = await DeleteTaskById(id);
  if(data){
    FetchAllData(); 
    toast.warning("Task is Deleted !")
  }
} catch (error) {
  console.log(error)
}}


///////HANDEL UPDATE BY ID
const handleUpdateClick = (id, name) => {
  setinput(name);
  setCurrentTaskId(id);
  setIsUpdating(true);
};

const handleUpdateTask = async () => {
  if (!input.trim()) {
    toast.error("Task is empty!");
    return;
  }
  const updatedTask = { taskname: input };
  try {
    const data = await UpdateTask(currentTaskId, updatedTask);
    if (data) {
      FetchAllData();
      toast.success("Task updated successfully!");
      setinput("");
      setIsUpdating(false);
      setCurrentTaskId(null);
    }
  } catch (error) {
    console.error("Error updating task:", error);
    toast.error("Failed to update task.");
  }
};



  return (
<>
   {/* TASK ADD INPUT FIELD */}
   <div className='d-flex flex-column align-items-center w-50 m-auto mt-5 border-primary'>
      <h1>Task Manager App</h1>
    <div className='d-flex justify-content-between align-item-center mb-4 w-100'>
    
    <div className='input-group flex-grow-1 me-1'>
        <input type="text"  className='form-control me-1' placeholder='Add a new Task' value={input} onChange={(e)=>setinput(e.target.value)}/>
        <button className='btn btn-success btn-sm me-2'  onClick={isUpdating ? handleUpdateTask : handleAddTask}


        ><FaPlus className='m-2'/></button>
      </div>

      <div className='input-group flex-grow-1 me-2'>
        {/* <span><FaSearch /></span> */}
        <input type="text" className='form-control me-1' placeholder='Serach the task'/>
        <button className='btn btn-success'><FaSearch /></button>
      </div>
    </div>


     {/* ALL TASK ITEMS */}
     <div className='flex flex-column w-100'>
     {/* <Task text={"this is second"}/>
     <Task text={"this is third"}/> */}

     {alltask.map((item,index) => {
            return <Task key={index} item={item} handelDeletTask={handelDeletTask} handelUpdate={handleUpdateClick} />;
          })}
     
     </div>



          {/* ADD TOSTIFY   */}
          <ToastContainer autoClose={1000} theme='dark'/>

    </div>

    </> 
  )
}

export default Taskmanager
