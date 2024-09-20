import React, { useState } from "react"

function Counter2 () {
    const [count, setCount] = useState(1);
    const [incBy, setInc] = useState(1);

    function resetEverything(e){
        setCount(1);
        setInc(1);
    }

    return (
        <div>
        <h1>Value of count {count}</h1>
        <input type="number" value={incBy} onChange={(e) => setInc(parseInt(e.target.value))}/>
        <button onClick={() => setCount(count + incBy)}>Increment by {incBy}</button>
        <button onClick={() => setCount(count - incBy)}>Decrement by {incBy}</button>
        <button onClick={() => setCount(count * incBy)}>Multiply by {incBy}</button>
        <button onClick={() => setCount(count / incBy)}>Divide by {incBy}</button>
        <button onClick={(e) => resetEverything(e)}>Reset</button>
        </div>
    )
}

export default Counter2;