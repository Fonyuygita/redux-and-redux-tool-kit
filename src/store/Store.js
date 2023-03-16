import { configureStore } from "@reduxjs/toolkit";
// import { createStore, combineReducers } from "redux";
// import { authReducer, countReducer } from "./reducers/authReducer";
import countReducer from "./slice/counterSlice"
import authReducer from "./slice/authSlice"

// create a reducer function and pass it to the store

// we can not pass more than one reducer in a store, we need to combine it using combine reducer before adding or passing into the store

// const reducers=combineReducers({
//     count:countReducer,
//     isLoggedIn:authReducer
// })
// create a store
export const store=configureStore({
    reducer:{
counter:countReducer,
auth:authReducer
    }
})

// export const store=createStore({reducers});

