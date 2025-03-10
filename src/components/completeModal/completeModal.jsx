import "./completeModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function CompleteModal({ isOpen, closeActiveModal, setActiveModal }) {
  const handleSignInRedir = () => {
    setActiveModal("login");
  };
  return (
    <ModalWithForm
      titleText="Registration successfully completed!"
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSignInRedir}
    >
      <button className="complete-modal__link">Sign in</button>
    </ModalWithForm>
  );
}

export default CompleteModal;
