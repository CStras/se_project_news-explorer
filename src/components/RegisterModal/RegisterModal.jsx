import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";

const RegisterModal = ({
  isOpen,
  setActiveModal,
  closeActiveModal,
  handleRegister,
}) => {
  const handleSubmit = (evt) => {
    const { email, password, name } = evt.target.elements;
    handleRegister({
      email: email.value,
      password: password.value,
      name: name.value,
    });
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
        Username
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
