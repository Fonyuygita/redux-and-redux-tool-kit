import { createStore, combineReducers } from "redux";
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

    // get payload from the dispatch 

    if(action.type==="ADD_NUMBER"){ 
        
        return state + action.payload;
}

}
// create an auth reducer

const authReducer=(state=true, action)=>{

    
    if(action.type==="TOGGLE_AUTH"){
        return state=!state;
    }

}

// we can not pass more than one reducer in a store, we need to combine it using combine reducer before adding or passing into the store

const reducers=combineReducers({
    count:countReducer,
    isLoggedIn:authReducer
})

// create a store

export const store=createStore({reducers});

