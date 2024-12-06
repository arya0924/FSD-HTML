import React, { useState } from 'react'

function Statehandling() {
    const [count,setCount]=useState(20);
    function doIncrement(){
        // alert{"hello"};
        setCount(count+20)
    }
  return (
    <div>Statehandling
       <div> <h2>Counter value:{count}</h2>
    </div>
    <div>
        <button onClick={doIncrement}>Increment</button>
    </div>
    </div>
  )
}

export default Statehandling