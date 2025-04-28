import LoginForm from "../components/LoginForm/LoginForm";
import { useUser } from "../contexts/UserContext";

export default function LogIn() {
  const { user, loginUser, logoutUser, error, loading } = useUser();
  return (
    <div>
      <h1>Log in</h1>{" "}
      {user && (
        <>
          <p style={{ color: "green" }} className="center">
            Connected as {user.firstName} {user.lastName}
          </p>
          <div className="buttons">
            <a href="/">
              <button>Back to home</button>
            </a>
            <button onClick={logoutUser}>Log out</button>
          </div>
        </>
      )}
      {!user && (
        <LoginForm onSubmit={loginUser} error={error} loading={loading} />
      )}
    </div>
  );
}
