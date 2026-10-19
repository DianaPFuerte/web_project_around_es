// FormValidator class: real-time validation for a single form
export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._form = formElement;
    this._inputList = Array.from(
      this._form.querySelectorAll(this._config.inputSelector),
    );
    this._submitButton = this._form.querySelector(
      this._config.submitButtonSelector,
    );
  }

  // Show the error message of an input
  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(
      `.${inputElement.name}-input-error`,
    );
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._config.errorClass);
  }

  // Hide the error message of an input
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(
      `.${inputElement.name}-input-error`,
    );
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._config.errorClass);
  }

  // Check if an input is valid and show/hide its error
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // Return true if at least one input is invalid
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  // Enable/disable the submit button based on form validity
  _toggleButtonState() {
    this._submitButton.disabled = this._hasInvalidInput();
  }

  // Event listeners for each input of the form
  _setInputListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  // Public method: clear errors and update the button (used when opening a modal)
  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }

  // Public method: activate the form validation
  setEventListeners() {
    this._toggleButtonState();
    this._setInputListeners();
  }
}
