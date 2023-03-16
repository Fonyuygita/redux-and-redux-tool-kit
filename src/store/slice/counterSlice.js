import { createSlice } from "@reduxjs/toolkit";
// create counter slice
 const counterSlice=createSlice({
    name:"counter",
    initialState:{
        count:0
    },

    // now our reducers goes here

    reducers:{
        // actions directly

        ADD: (state)=>{

            state.count+=1

        },
        ADD_NUMBER:(state, action)=>{

            state.count+=action.payload
        },

        SUBTRACT:(state)=>{
state.count-=1
        },

        MULTIPLY:(state)=>{
            state.count*=1
        },

        RESET:(state)=>{
            state.count=0
        }

        



    }
})
// destructure your actions and import them
export const {ADD, SUBTRACT, ADD_NUMBER, MULTIPLY, RESET}=counterSlice.actions
export default counterSlice.reducer