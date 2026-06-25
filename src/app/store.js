import { configureStore } from "@reduxjs/toolkit";
import taskListReducer from "../slice/TaskListSlice"

export const store = configureStore({
   reducer:{
      tasks: taskListReducer
   }
})