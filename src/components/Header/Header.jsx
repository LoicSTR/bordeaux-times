import "./Header.css";
import { useUser } from "../../contexts/UserContext";
import LoginButton from "./LoginButton";
import { NavLink } from "react-router";

export default function Header() {
  const { user, logoutUser } = useUser();
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "title active" : "title")}
        >
          Bordeaux Times
        </NavLink>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Articles
            </NavLink>
          </li>
          <li>
            <LoginButton user={user} logout={logoutUser} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
