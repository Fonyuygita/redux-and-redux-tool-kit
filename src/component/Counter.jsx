

import './Counter.css'
import { useDispatch, useSelector } from 'react-redux'
import {handleAdd, handleSubtract, handleAddNumber, handleMultiply, handleAuth, handleReset} from "../store/actions/action.js"

const Counter = () => {

  const count = useSelector((state) => state.count);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  // const isLoggedIn = useSelector((state) => state.isLoggedIn);


  // const isLoggedIn = useSelector((state) => state.isLoggedIn)
  // useSelector is use to select state from the store

  // state as an argument which returns a state
  console.log(count);
  // console.log(isLoggedIn)

  // use dispatch to perform an action

  const dispatch = useDispatch();



  return (
    <div className='container'>
      <h1>React Redux Tutorial</h1>
      <div className='box'>
        <div className='items'>
          <button className=' log' onClick={()=>dispatch(handleAuth)}>Logout</button>
        </div>

        <div className="count">
          <h1 className='item'>{count}</h1>
        </div>

        {/**our btns goes here*/}

        <div className="btns">

          <div className='items'>
            <button className='btn1' onClick={()=>dispatch(handleAdd)}>Add</button>
          </div>
          <div className='items'>
            <button className='btn2' onClick={()=>dispatch(handleSubtract)}>Subtract</button>
          </div>
          <div className='items'>
            <button className='btn3' onClick={()=>dispatch(handleMultiply)}>Multiply</button>
          </div>

          <div className='items'>
            <button className='btn3' onClick={()=>dispatch(handleReset)}>Reset</button>
          </div>

          <div className='items'>
            <button className='btn2' onClick={() => dispatch(handleAddNumber(5))}>Add 5</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Counter