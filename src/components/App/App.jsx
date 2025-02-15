import "./App.css";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import SavedNews from "../SavedNewsArticles/SavedNews.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../context/currentUserContext.js";
import { Routes, Route } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    avatar: "",
    _id: "",
  });
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const handleLogin = () => {
    setActiveModal("login");
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
            <Route path="/" element={<Main handleLogin={handleLogin} />} />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute isLoggedIn={isLoggedin}>
                  <SavedNews />
                </ProtectedRoute>
              }
            />
          </Routes>
          {activeModal === "login" && (
            <LoginModal
              setActiveModal={setActiveModal}
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "login"}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              setActiveModal={setActiveModal}
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "register"}
            />
          )}
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
