import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { CakeView } from "./features/cake/CakeView";
import { IcecreamView } from "./features/icecream/IcecreamView";
import { Userview } from "./features/users/UserView";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CakeView />
      <IcecreamView />
      <Userview />
    </>
  );
}

export default App;
