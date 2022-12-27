import React, {useState} from 'react'
import './Inc.css';
const Inc = () => {
    const [Count,SetCount] = useState(0);
    function Increment(){
        SetCount(Count+1);
    }
    function Decrement(){
        SetCount(Count-1);
    }
  return (
    <div className='bt'>
      <button onClick={Decrement}>-</button>
      <span>{Count}</span>
      <button onClick={Increment}>+</button>
    </div>
  )
}

export default Inc
