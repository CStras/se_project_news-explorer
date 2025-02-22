import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import { FormValidation } from "../../utils/FormValidation.js";

const RegisterModal = ({
  isOpen,
  setActiveModal,
  closeActiveModal,
  handleRegister,
}) => {
  const { values, handleChange, isValid, errors } = FormValidation();

  const handleSubmit = (evt) => {
    handleRegister(values.email, values.password, values.username);
  };

  return (
    <ModalWithForm
      titleText="Sign up"
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      firstBtnText="Sign up"
      secondBtnText=" Log in"
      secondBtnClick={() => setActiveModal("login")}
      onSubmit={handleSubmit}
      formValid={isValid}
    >
      <label className="modal__label" htmlFor="email">
        Email
        <input
          className="modal__input"
          type="email"
          id="email"
          name="email"
          required
          onChange={handleChange}
          value={values.email || ""}
        />
      </label>
      <span
        className={`modal__input-error ${
          errors.email ? "modal__input-error_visible" : ""
        }`}
        id="email-error"
      >
        {errors.email}
      </span>
      <label className="modal__label" htmlFor="password">
        Password
        <input
          className="modal__input"
          type="password"
          id="password"
          name="password"
          required
          onChange={handleChange}
          value={values.password || ""}
        />
      </label>
      <span
        className={`modal__input-error ${
          errors.password ? "modal__input-error_visible" : ""
        }`}
        id="password-error"
      >
        {errors.password}
      </span>
      <label className="modal__label" htmlFor="username">
        Username
        <input
          className="modal__input"
          type="text"
          id="username"
          name="username"
          required
          onChange={handleChange}
          value={values.username || ""}
        />
      </label>
      <span
        className={`modal__input-error ${
          errors.username ? "modal__input-error_visible" : ""
        }`}
        id="name-error"
      >
        {errors.username}
      </span>
    </ModalWithForm>
  );
};

export default RegisterModal;
