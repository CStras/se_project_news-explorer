import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";

const RegisterModal = ({
  isOpen,
  setActiveModal,
  closeActiveModal,
  handleSubmit,
}) => {
  return (
    <ModalWithForm
      titleText="Sign up"
      closeActiveModal={closeActiveModal}
      handleSubmit={handleSubmit}
      isOpen={isOpen}
      firstBtnText="Sign up"
      secondBtnText="or Log in"
      secondBtnClick={() => setActiveModal("login")}
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
      <label className="modal__label" htmlFor="name">
        Name
        <input
          className="modal__input"
          type="text"
          id="name"
          name="name"
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
