import "./ModalWithForm.css";

function ModalWithForm({
  children,
  titleText,
  closeActiveModal,
  isOpen,
  secondBtnClick,
  firstBtnText,
  secondBtnText,
  onSubmit,
  formValid,
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };

  return (
    <div className={`modal ${isOpen && "modal_open"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{titleText}</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        />

        <form className="modal__form" onSubmit={handleSubmit}>
          {children}
          <div className="modal__next-btns">
            {firstBtnText && (
              <button
                className={formValid ? "modal__submit__valid" : "modal__submit"}
                type="submit"
              >
                {firstBtnText}
              </button>
            )}
            {secondBtnText && (
              <button
                className="modal__second-btn"
                type="button"
                onClick={secondBtnClick}
              >
                <span className="modal__alt-text_active">or</span>
                {secondBtnText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
