import "./App.css";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../context/currentUserContext.js";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [currentKey, setCurrentKey] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleLogin = (values, resetForm) => {
    if (!values) {
      return;
    }

    setIsLoggedIn(true);
    closeActiveModal();
    resetForm();
    navigate("/");
  };

  const handleRegister = (values, resetForm) => {
    if (!values) {
      return;
    }

    setCurrentUser({
      email: values.email,
      password: values.password,
      username: values.name,
    });
    setIsLoggedIn(true);
    closeActiveModal();
    resetForm();
    navigate("/");
  };

  const closeActiveModal = () => {
    setActiveModal("");
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
                  setCurrentKey={setCurrentKey}
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
