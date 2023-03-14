import { createStore } from "redux";
// create a reducer function and pass it to the store

// reducer takes two params state and action

const countReducer=(state=5, action)=>{
    //    es6 gives us the capacigty to initialize our var inside a function with values

    // so, whatever we want to do to this state is done here

    if(action.type==="SUBTRACT"){
        return state-1;
    }

    if(action.type==="ADD"){

        return state+1;
    }

    if(action.type==="MULTIPLY"){
        return state*2;
    }


    if(action.type==="RESET"){
        return state=0;
    }

    return state;


}


// create a store

export const store=createStore(countReducer);

