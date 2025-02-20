import "./App.css";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import { getNews } from "../../utils/api.js";
import { getLastWeeksDate, getCurrentDate } from "../../utils/FindDate.js";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../context/currentUserContext.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import { apikey } from "../../utils/contant.js";
import { ArticleContext } from "../../context/articleContext.js";
import auth from "../../utils/auth.js";
import { set } from "mongoose";

function App() {
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
    username: "",
    _id: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [userArticles, setUserArticles] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [isSuccessNewsData, setIsSuccessNewsData] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoadingNewsData, setIsLoadingNewsData] = useState(false);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleLogin = (values, resetForm) => {
    if (!values) {
      return;
    }

    const name = values.email.split("@")[0];
    console.log(name);

    setCurrentUser({
      email: values.email,
      password: values.password,
      username: name,
    });
    console.log(currentUser);

    setIsLoggedIn(true);
    closeActiveModal();

    navigate("/");
  };

  const handleRegister = (email, password, username) => {
    auth
      .createUser({ email, password, username })
      .then((data) => {
        setCurrentUser(data.data);
        console.log(data.data);
        console.log(currentUser);
        setIsLoggedIn(true);
        closeActiveModal();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = () => {
    if (currentKeyword === "") {
      setIsSuccessNewsData(true);
      return;
    }

    setNewsData([]);
    setIsLoadingNewsData(true);
    setIsSuccessNewsData(false);
    setIsError(false);

    getNews(currentKeyword, apikey, getLastWeeksDate(), getCurrentDate())
      .then((data) => {
        setNewsData(data.articles);
        setIsSuccessNewsData(true);
        setIsLoadingNewsData(false);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      });
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleModalClose = (evt) => {
      if (
        (evt.target.classList.contains("modal_open") && evt.type === "click") ||
        evt.key === "Escape"
      ) {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleModalClose);
    document.addEventListener("click", handleModalClose);

    return () => {
      document.removeEventListener("keydown", handleModalClose);
      document.removeEventListener("click", handleModalClose);
    };
  }, [activeModal]);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="app_content">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  handleLogin={handleLoginClick}
                  isLoggedIn={isLoggedIn}
                  setCurrentKeyword={setCurrentKeyword}
                  handleSearch={handleSearch}
                  newsData={newsData}
                  isSuccessNewsData={isSuccessNewsData}
                  isError={isError}
                  isLoadingNewsData={isLoadingNewsData}
                  setActiveModal={setActiveModal}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNews isLoggedIn={isLoggedIn} />
                </ProtectedRoute>
              }
            />
          </Routes>
          {activeModal === "login" && (
            <LoginModal
              setActiveModal={setActiveModal}
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "login"}
              handleLogin={handleLogin}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              setActiveModal={setActiveModal}
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "register"}
              handleRegister={handleRegister}
            />
          )}
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
