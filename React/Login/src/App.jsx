import { useState } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import styles from "./app.module.css";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [newUser, setNewUser] = useState(true);
  return (
    <div className={styles.container}>
      {newUser ? (
        <SignUp
          name={name}
          number={number}
          email={email}
          userId={userId}
          setName={setName}
          setNumber={setNumber}
          setEmail={setEmail}
          setUserId={setUserId}
          setNewUser={setNewUser}
        />
      ) : (
        <SignIn
          email={email}
          userId={userId}
          setEmail={setEmail}
          setUserId={setUserId}
          setNewUser={setNewUser}
        />
      )}
    </div>
  );
}

export default App;
