import "./Header.css";
import { useUser } from "../../contexts/UserContext";
import LoginButton from "./LoginButton";

export default function Header() {
  const { user, logoutUser } = useUser();
  return (
    <header>
      Bordeaux Times
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/articles">Articles</a>
          </li>
        </ul>
      </nav>
      <LoginButton user={user} logout={logoutUser} />
    </header>
  );
}
