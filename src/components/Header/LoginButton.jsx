import { NavLink } from "react-router";

export default function LoginButton({ user, logout }) {
  return (
    <>
      {!user && (
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "nav")}
        >
          <button className="secondary">Login</button>
        </NavLink>
      )}
      {user && (
        <button onClick={logout} className="secondary user">
          {user.firstName} {user.lastName}
          <span>Logout</span>
        </button>
      )}
    </>
  );
}
