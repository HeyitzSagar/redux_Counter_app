import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incNumber, decNumber } from './action';
const App = () => {
  const mystate = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(incNumber())}>+</button>
      <p>{mystate}</p>
      <button onClick={() => dispatch(decNumber())}>-</button>
    </div>
  )
}

export default App
