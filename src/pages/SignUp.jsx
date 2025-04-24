import SignUpForm from "../components/SignUpForm/SignUpForm";
import { useUser } from "../contexts/UserContext";

export default function SignUp() {
  const { user, loginUser, error, loading } = useUser();
  return (
    <div>
      <h1>SignUp</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error : {error}</p>}
      {user && (
        <p style={{ color: "green" }}>
          Connecté en tant que {user.firstName} {user.lastName}
        </p>
      )}
      {!user && <SignUpForm onSubmit={loginUser} />}
    </div>
  );
}
