export class FormValidator {
	constructor(config, currentFormSelector) {
		this._form = document.querySelector(currentFormSelector);
    this._inputList = Array.from(this._form.querySelectorAll(config.inputSelector));
    this._submitButton = this._form.querySelector(config.submitButtonSelector);
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
	}

  _checkInputValidity() {
    return this._inputList.some(inputElement => !inputElement.validity.valid);
  }

  toggleButtonState() {

    if (this._checkInputValidity()) {
      this._submitButton.disabled = true;
    } else {
      this._submitButton.disabled = false;
    }
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _setEventListeners() {

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this.toggleButtonState();
      });
    });
  };

  removeInputError() {
    this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement);
    });
  };

  enableValidation() {
      this._setEventListeners();
    };

}
