import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { UserProvider } from "./contexts/UserContext";
import Home from "./pages/Home.jsx";
import ArticlesList from "./pages/ArticlesList.jsx";
import ArticleDetails from "./pages/ArticleDetails.jsx";
import SignUp from "./pages/SignUp.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <UserProvider>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/article/:articleId" element={<ArticleDetails />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer>Footer</footer>
    </UserProvider>
  );
}

export default App;
