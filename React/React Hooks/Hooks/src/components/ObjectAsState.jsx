import { useState } from "react"


function ObjectAsState() {
    const [name, setName] = useState({firstName : '', lastName : ''})

    return <div>
        <form>
            <h1>My name is {name.firstName} {name.lastName}</h1>
            <input type="text" value={name.firstName} onChange={(e) => {setName({...name, firstName : e.target.value})}} placeholder="Enter first name"/>

            <input type="text" value={name.lastName} onChange={(e) => {setName({...name, lastName: e.target.value})}} placeholder="Enter last name"/>

        </form>
    </div>
}

export default ObjectAsState;