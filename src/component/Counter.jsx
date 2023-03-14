import React, { useState } from 'react'

import './Counter.css'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {

const count=useSelector(state=>state);

// useSelector is use to select state from the store

// state as an argument which returns a state
console.log(count);

// use dispatch to perform an action

const dispatch=useDispatch();



const handleAdd=()=>{
  // setCount(count+2)

  // use dispatch to perform an action

  dispatch({
    type:"ADD"
  })
  
}


const handleSubtract=()=>{
  // setCount(count - 1)
  dispatch({
    type:"SUBTRACT"
  })
  
}

const handleMultiply=()=>{
  // setCount(count *2)

  dispatch({
    type:"MULTIPLY"
  })
}


const handleReset=()=>{
  // setCount(0)
  dispatch({
    type:"RESET"
  })
}

  return (
    <div className='container'>
    <h1>React Redux Tutorial</h1>
    <div className='box'>
    <div className="count">
    <h1 className='item'>{count}</h1>
    </div>

    {/**our btns goes here*/}

    <div className="btns">

    <div className='items'>
    <button className='btn1' onClick={handleAdd}>Add</button>
    </div>
    <div className='items'>
    <button className='btn2'  onClick={handleSubtract}>Subtract</button>
    </div>
    <div className='items'>
    <button className='btn3'  onClick={handleMultiply}>Multiply</button>
    </div>

    <div className='items'>
    <button className='btn3'  onClick={handleReset}>Reset</button>
    </div>
    
    </div>
    </div>
    
    </div>
  )
}

export default Counter