import React, { useState } from "react";

function Counter () {
    const [count, setCount] = useState(0);
    // useState returns the two values one is value and other is function which is used to manipulate that value

    return <div>
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
};

export default Counter;