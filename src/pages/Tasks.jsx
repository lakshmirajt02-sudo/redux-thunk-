import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTasksFromServer } from '../slice/TaskListSlice'

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
  
  return (
    <div>
      <h1>Tasks</h1>
      <div>
        {taskLists.map((item)=>(
          <div key = {item.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.description}</p><hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tasks