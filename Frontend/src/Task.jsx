import React from 'react'
import { FaCheck,FaPen,FaSearch,FaPlus,FaTrash } from "react-icons/fa";

function Task({item,handelDeletTask,handelUpdate }) {

  return (
    <>
        <div className="m-2 p-2 border bg-light w-100 rounded-3 d-flex justify-content-between align-items-center">
        <span className=''>{item.taskname}</span>
        <div className=" button-group ">
          {/* <button className='btn btn-success btn-sm '><FaCheck/></button> */}
          <button className='btn btn-success btn-sm m-1' onClick={() => handelUpdate(item._id, item.taskname)}><FaPen/></button>
          <button className='btn btn-danger btn-sm' onClick={()=>handleDeleteClick(item._id)}><FaTrash /></button>
        
        </div>
             </div>
    </>
  )
}

export default Task
