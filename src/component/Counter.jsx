import React, { useState } from 'react'

import './Counter.css'

const Counter = () => {
const [count, setCount]=useState(0);



const handleAdd=()=>{
  setCount(count+2)
  
}


const handleSubtract=()=>{
  setCount(count - 1)
  
}

const handleMultiply=()=>{
  setCount(count *2)
}

  return (
    <div className='container'>
    <h1>React Redux Tutorial</h1>
    <div className='box'>
    <div className="count">
    <div className='item'>{count}</div>
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
    
    </div>
    </div>
    
    </div>
  )
}

export default Counter