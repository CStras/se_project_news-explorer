import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";

const LoginModal = ({
  isOpen,
  setActiveModal,
  closeActiveModal,
  handleSubmit,
}) => {
  return (
    <ModalWithForm
      titleText="Log in"
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      firstBtnText="Log in"
      secondBtnText="or Sign up"
      secondBtnClick={() => setActiveModal("register")}
    >
      <label className="modal__label" htmlFor="email">
        Email
        <input
          className="modal__input"
          type="email"
          id="email"
          name="email"
          required
        />
      </label>
      <label className="modal__label" htmlFor="password">
        Password
        <input
          className="modal__input"
          type="password"
          id="password"
          name="password"
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
