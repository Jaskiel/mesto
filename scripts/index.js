import { Card } from './card.js';
import { FormValidator } from './formValidator.js';
import { initialCards } from './initial-сards.js';
import { openPopup, closePopup, closeByEscape } from './utils/utils.js';

const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

const profileEditButton = document.querySelector(".profile__edit-button");

const popupEdit =  document.querySelector(".popup_type_edit");

const popupNewCard =  document.querySelector(".popup_type_new-card");

const addButton = document.querySelector(".profile__add-button");

const editPopupSubmitButton = popupEdit.querySelector(".form__submit");

const newCardSubmitButton = popupNewCard.querySelector(".form__submit");

const cross = popupEdit.querySelector(".popup__close");

const crossNewCard = popupNewCard.querySelector(".popup__close");

const nameInput = popupEdit.querySelector(".form__input_el_name");

const jobInput = popupEdit.querySelector(".form__input_el_job");

const cardNameInput = popupNewCard.querySelector(".form__input_el_card-name");

const cardLinkInput = popupNewCard.querySelector(".form__input_el_card-link");

const profileName = document.querySelector(".profile__name");

const profileJob = document.querySelector(".profile__description");

const formEdit = popupEdit.querySelector(".form");

const formNewCard = popupNewCard.querySelector(".form");

const elements = document.querySelector(".elements");

const elementsList = elements.querySelector('.elements__card-zone');

const imgTemplate = document.querySelector('#img-card').content;

const popupTypeImage = document.querySelector('.popup_type_image');

const popupImage = popupTypeImage.querySelector('.popup__image');

const popupCaption = popupTypeImage.querySelector('.popup__caption');

const closePopupTypeImage = popupTypeImage.querySelector('.popup__close');

const editPopupInputList = Array.from(formEdit.querySelectorAll('.form__input'));

const formEditElement = '.form_type_edit';

const formAddElement = '.form_type_new-card';

const cardTemplateSelector = '#img-card';

function createCard(data, cardSelector) {
  const card = new Card(data, cardSelector);
  return card;
}

function closeByOverlay(popup) {
  popup.addEventListener('click', function(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(popup);
}
});
};

closeByOverlay(popupEdit);
closeByOverlay(popupNewCard);
closeByOverlay(popupTypeImage);

function formEditProfileSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEdit);
}

formEdit.addEventListener('submit', formEditProfileSubmitHandler);

profileEditButton.addEventListener('click', function () {
  formEditProfleValidator.removeInputError();

  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  formEditProfleValidator.toggleButtonState();
});

cross.addEventListener('click', function() {
  closePopup(popupEdit);
});

addButton.addEventListener('click', function () {

  cardLinkInput.value = "";

  cardNameInput.value = "";

  formAddCardValidator.removeInputError();

  formAddCardValidator.toggleButtonState();

  openPopup(popupNewCard);
});

crossNewCard.addEventListener('click', function() {
  closePopup(popupNewCard);
});

function submitAddCardForm(evt) {

  evt.preventDefault();

  const newCardData = {};

  newCardData.name = cardNameInput.value;

  newCardData.link = cardLinkInput.value;

  const imgCard = createCard(newCardData, cardTemplateSelector);
  const cardElement = imgCard.generateCard();

  elementsList.prepend(cardElement);

  closePopup(popupNewCard);
};

formNewCard.addEventListener('submit', submitAddCardForm);

closePopupTypeImage.addEventListener('click', function(){
    closePopup(popupTypeImage);
});

initialCards.forEach((item) => {
  const card = createCard(item, cardTemplateSelector);
  const cardElement = card.generateCard();

  elementsList.append(cardElement);
});

const formEditProfleValidator = new FormValidator(config, formEditElement);
formEditProfleValidator.enableValidation();
const formAddCardValidator = new FormValidator(config, formAddElement);
formAddCardValidator.enableValidation();
