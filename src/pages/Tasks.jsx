import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTasksFromServer , deleteTaskFromServer } from '../slice/TaskListSlice'

const Tasks = () => {

  const {taskLists, is_loading, error}  = useSelector((state)=>state.tasks)
  // console.log(taskLists);
  // console.log(is_loading);
  // console.log(error);
  
  const dispatch =  useDispatch()
  useEffect(()=>{
    dispatch(getTasksFromServer())
  },[])
  // console.log(taskLists);

  const handleDelete = (id)=>{
    const is_confirm =window.confirm("Are you sure you want to delete this task ?")
    if(is_confirm){
         dispatch(deleteTaskFromServer(id))
    }
  }
  
  return (
    <div>
      <h1>Tasks</h1>
      <div>
        {taskLists.map((item)=>(
          <div key = {item.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <button onClick={()=>handleDelete(item.id)} >Delete</button><hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tasks