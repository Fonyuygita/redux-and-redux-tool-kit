import { createSlice } from "@reduxjs/toolkit";

// create your auth slice

const authSlice=createSlice({
    name:"authSlice",
    initialState:true,

    // we have our reducers here

    reducer:{
        // actions

        TOGGLE_AUTH:(state)=>{
state.isLoggedIn=!state.isLoggedIn

            
        }

    }
})
export const {TOGGLE_AUTH}=authSlice.actions
export default authSlice.reducer