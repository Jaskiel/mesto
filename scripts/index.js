import {openPopup, closePopup, closeByEscape, Card} from './card.js';
import {FormValidator} from './formValidator.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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

const formEditElement = '.form__popup_type_edit';

const formAddElement = '.form__popup_type_new-card';

//close Popup by click on overlay function

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




closeByEscape(popupEdit);
closeByEscape(popupNewCard);
closeByEscape(popupTypeImage);



function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEdit);
}

formEdit.addEventListener('submit', formSubmitHandler);

profileEditButton.addEventListener('click', function () {
  formEditValidator.removeInputError();

  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  formEditValidator.toggleButtonState();
});

cross.addEventListener('click', function() {
  closePopup(popupEdit);
});



//popup_type_new-card Toggle

addButton.addEventListener('click', function () {

  cardLinkInput.value = "";

  cardNameInput.value = "";

  formAddValidator.removeInputError();

  formAddValidator.toggleButtonState();

  openPopup(popupNewCard);
});

crossNewCard.addEventListener('click', function() {
  closePopup(popupNewCard);
});


//adding of new-card functionality

function addnewCard(evt) {

  evt.preventDefault();

  const newCardData = {};

  newCardData.name = cardNameInput.value;

  newCardData.link = cardLinkInput.value;

  const imgCard = new Card(newCardData, '#img-card');
  const cardElement = imgCard.generateCard();

  elementsList.prepend(cardElement);

  closePopup(popupNewCard);
};

formNewCard.addEventListener('submit', addnewCard);



//closing popup-image functionality

closePopupTypeImage.addEventListener('click', function(){
    closePopup(popupTypeImage);
});










initialCards.forEach((item) => {
  const card = new Card(item, '#img-card');
  const cardElement = card.generateCard();

  elementsList.append(cardElement);
});


const formEditValidator = new FormValidator(config, formEditElement);
formEditValidator.enableValidation();
const formAddValidator = new FormValidator(config, formAddElement);
formAddValidator.enableValidation();
