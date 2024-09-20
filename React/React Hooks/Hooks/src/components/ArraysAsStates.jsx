import { useState } from "react"

function ArraysAsStates() {
    const [items, setItems] = useState([]);

    const addItems = () => {
        setItems([...items, {
            id : items.length, 
            name : Math.floor((Math.random() * 10) + 1)
        }])
    }

    return <div>
        <button onClick={addItems}>Add</button>
        <button onClick={() => setItems([])}>Reset</button>
        <h1>List of elements is </h1>
        <ul>
            {
                items.map((item) => (
                    <li id={item.id}>{item.name}</li>
                ))
            }
        </ul>
    </div>
}

export default ArraysAsStates;