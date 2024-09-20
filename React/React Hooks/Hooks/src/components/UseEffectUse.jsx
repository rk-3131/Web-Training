import { useEffect, useState } from "react";

function UseEffectUse () {
    const [clicked, changeClicked] = useState(0);

    useEffect(() => {
        document.title = clicked
    },[clicked]);

    return <div>
        <h1>Click button and then see the title of the page</h1>
        <button onClick={() => changeClicked(clicked + 1)}>Click me!</button>
    </div>
}

export default UseEffectUse;