import "../ModalWithForm/ModalWithForm.css";
import { Link } from "react-router-dom";

function MenuModal({
  isOpen,
  closeActiveModal,
  isLoggedIn,
  handleLoginClick,
  handleLogout,
}) {
  return (
    <div className={`modal ${isOpen && "modal_open modal__menu"}`}>
      <div className="modal__content_menu">
        <h2 className="modal__title_menu">NewsExplorer</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close_menu"
        />

        <Link className="modal__menu-link" to="/">
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link className="modal__menu-link" to="/saved-news">
              Saved News
            </Link>
            <button onClick={handleLogout} className="modal__menu_login-logout">
              Sign out
            </button>
          </>
        ) : (
          <button
            onClick={handleLoginClick}
            className="modal__menu_login-logout"
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuModal;
