//Validation of forms




// const isValid = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add('form__input_type_error');
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add('form__input-error_active');
// };

// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove('form__input_type_error');
//   errorElement.classList.remove('form__input-error_active');
//   errorElement.textContent = '';
// };


// const setEventListeners = (formElement) => {
//
//   formElement.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//   });
//
//   const buttonElement = formElement.querySelector('.form__submit');
//
//   const inputList = Array.from(formElement.querySelectorAll('.form__input'));
//
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       isValid(formElement, inputElement);
//       toggleButtonState(buttonElement, inputList);
//     });
//   });
// };


// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll('.form'));
//
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//
//     setEventListeners(formElement);
//   });
// };



// const hazInvalidInput = (inputList) => {
//   return inputList.some(inputElement => !inputElement.validity.valid);
// }

// const toggleButtonState = (buttonElement, inputList) => {
//
//   if (hazInvalidInput(inputList)) {
//     buttonElement.disabled = true;
//   } else {
//     buttonElement.disabled = false;
//   }
// }






 export class FormValidator {
	constructor(config, currentFormSelector) {
		this._form = document.querySelector(currentFormSelector);
    this._inputList = Array.from(this._form.querySelectorAll(config.inputSelector));
    this._submitButton = this._form.querySelector(config.submitButtonSelector);
	}

  _hazInvalidInput() {
    return this._inputList.some(inputElement => !inputElement.validity.valid);
  }

  toggleButtonState() {

    if (this._hazInvalidInput()) {
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
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
  };

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
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
