import "./App.css";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import CompleteModal from "../completeModal/completeModal.jsx";
import { getNews } from "../../utils/api.js";
import { getLastWeeksDate, getCurrentDate } from "../../utils/FindDate.js";
import { useState, useEffect } from "react";
import CurrentUserContext from "../../context/currentUserContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import { apikey } from "../../utils/contant.js";
import auth from "../../utils/auth.js";

function App() {
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
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

  const handleLogin = (values) => {
    if (!values) {
      return;
    }

    const email = values.email;
    const password = values.password;

    auth
      .loginUser({ email, password })
      .then((data) => {
        console.log(data);

        if (data) {
          localStorage.setItem("token", data);
          auth.checkToken(data).then((data) => {
            setCurrentUser(data);

            setIsLoggedIn(true);

            closeActiveModal();
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setCurrentUser({});
  };

  const handleRegister = (email, password, username) => {
    auth
      .createUser({ email, password, username })
      .then((data) => {
        setActiveModal("complete");
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

  /* useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
          console.log(currentUser);
        })
        .catch((error) => {
          console.error("Token invalid or expired:", error);
          setIsLoggedIn(false);
          localStorage.removeItem("token");
        });
    }
  }, []); */

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
                  handleLogout={handleLogout}
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
          {activeModal === "complete" && (
            <CompleteModal
              isOpen={activeModal === "complete"}
              setActiveModal={setActiveModal}
              closeActiveModal={closeActiveModal}
            />
          )}
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
