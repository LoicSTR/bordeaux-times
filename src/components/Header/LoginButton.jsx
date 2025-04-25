import { NavLink } from "react-router";

export default function LoginButton({ user, logout }) {
  return (
    <>
      {!user && (
        <NavLink to="/sign-up">
          <button className="secondary">Login</button>
        </NavLink>
      )}
      {user && (
        <button onClick={logout} className="secondary">
          {user.firstName} {user.lastName}
        </button>
      )}
    </>
  );
}
