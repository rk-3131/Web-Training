import styles from "./signup.module.css";

export default function SignUp({
  name,
  number,
  email,
  userId,
  setName,
  setNumber,
  setEmail,
  setUserId,
  setNewUser,
}) {
  function handleSubmit(e) {
    if (name === "" || email === "" || number === "" || userId === "") {
      alert("Everything in form is menndatory");
      return;
    }
    e.preventDefault();
    console.log("name" + name);
    console.log("email" + email);
    console.log("number" + number);
    console.log("userId" + userId);
    setNewUser(false);
  }
  return (
    <div className={styles.outerContainer}>
      <form>
        <div className={styles.container}>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter name..."
            />
          </div>
          <div>
            <input
              type="text"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              placeholder="Enter phone number..."
            />
          </div>
          <div>
            {" "}
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter email address..."
            />
          </div>
          <div>
            <input
              type="text"
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
              placeholder="Choose user id..."
            />
          </div>
          <div>
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Sign Up
            </button>
          </div>
          <div>
            <p
              onClick={(e) => {
                setNewUser(false);
              }}
            >
              Already User?
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
