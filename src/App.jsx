import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { UserProvider } from "./contexts/UserContext";
import Home from "./pages/Home.jsx";
import ArticlesPage from "./pages/ArticlesPage.jsx";
import ArticleDetails from "./pages/ArticleDetails.jsx";
import LogIn from "./pages/LogIn.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

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
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
