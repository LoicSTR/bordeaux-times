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
        <div role="button" onClick={logout} className="button-secondary">
          <div className="overlay">
            <span>+</span>
          </div>
          {user.firstName} {user.lastName}
        </div>
      )}
    </>
  );
}
