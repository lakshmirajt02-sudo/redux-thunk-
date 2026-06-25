import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   tasksLists : [],
   is_loading : false,
   error: "",
}