import styles from "./signIn.module.css";

export default function SignIn({
  email,
  userId,
  setEmail,
  setUserId,
  setNewUser,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    if (email === "" || userId === "") {
      alert("Everything in form is menndatory");
      return;
    }
    setNewUser(false);
  }
  return (
    <div className={styles.outerContainer}>
      <form>
        <div className={styles.container}>
          <div>
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
              placeholder="Enter user id..."
            />
          </div>
          <div>
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Sign In
            </button>
          </div>
          <div>
            <p
              onClick={(e) => {
                setNewUser(true);
              }}
            >
              New User?
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
