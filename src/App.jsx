import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { UserProvider } from "./contexts/UserContext";
import Home from "./pages/Home.jsx";
import ArticlesPage from "./pages/ArticlesPage.jsx";
import ArticleDetails from "./pages/ArticleDetails.jsx";
import Login from "./pages/Login.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/article/:articleId" element={<ArticleDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <footer>Footer</footer>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
