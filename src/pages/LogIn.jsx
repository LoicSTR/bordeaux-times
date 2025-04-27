import LoginForm from "../components/LoginForm/LoginForm";
import { useUser } from "../contexts/UserContext";

export default function Login() {
  const { user, loginUser, logoutUser, error, loading } = useUser();
  return (
    <div>
      <h1>Login</h1>{" "}
      {user && (
        <>
          <p style={{ color: "green" }} className="center">
            Connected as {user.firstName} {user.lastName}
          </p>
          <div className="buttons">
            <a href="/">
              <button>Home</button>
            </a>
            <button onClick={logoutUser}>Logout</button>
          </div>
        </>
      )}
      {!user && (
        <LoginForm onSubmit={loginUser} error={error} loading={loading} />
      )}
    </div>
  );
}
