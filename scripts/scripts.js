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

let profileEditButton = document.querySelector(".profile__edit-button");

let popupEdit =  document.querySelector(".popup_type_edit");

let popupNewCard =  document.querySelector(".popup_type_new-card");

let addButton = document.querySelector(".profile__add-button");

let cross = popupEdit.querySelector(".popup__close");

let crossNewCard = popupNewCard.querySelector(".popup__close");

let nameInput = popupEdit.querySelector(".form__input-item_el_name");

let jobInput = popupEdit.querySelector(".form__input-item_el_job");

let cardNameInput = popupNewCard.querySelector(".form__input-item_el_card-name");

let cardLinkInput = popupNewCard.querySelector(".form__input-item_el_card-link");

let profileName = document.querySelector(".profile__name");

let profileJob = document.querySelector(".profile__description");

let formEdit = popupEdit.querySelector(".form");

let formNewCard = popupNewCard.querySelector(".form");

let elements = document.querySelector(".elements");

const elementsList = elements.querySelector('.elements__card-zone');

const imgTemplate = document.querySelector('#img-card').content;

function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopup(popupEdit);
}

formEdit.addEventListener('submit', formSubmitHandler);

profileEditButton.addEventListener('click', function () {
  togglePopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

cross.addEventListener('click', function() {
  togglePopup(popupEdit);
});



//adding initial image-cards

initialCards.forEach(function (item) {

  const imgCard = imgTemplate.querySelector('.elements__list-item').cloneNode(true);

  const cardImage = imgCard.querySelector('.card__image');

  const cardTitle = imgCard.querySelector('.card__title');

  cardImage.src = item.link;

  cardTitle.textContent = item.name;

  elementsList.append(imgCard);

});



//likes functionality
const likeButtons = elementsList.querySelectorAll('.card__like');

likeButtons.forEach(function (like) {
  like.addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active');
  });
});



//popup_type_new-card Toggle

addButton.addEventListener('click', function () {
  togglePopup(popupNewCard);
});

crossNewCard.addEventListener('click', function() {
  togglePopup(popupNewCard);
});



//adding of new-card functionality

function newCardAdding(evt) {

  evt.preventDefault();

  const imgCard = imgTemplate.querySelector('.elements__list-item').cloneNode(true);

  const cardImage = imgCard.querySelector('.card__image');

  const cardTitle = imgCard.querySelector('.card__title');

  const likeButton = imgCard.querySelector('.card__like');

  const deleteButton = imgCard.querySelector('.card__trash');

  likeButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active');
  });

  deleteButton.addEventListener('click', function(evt) {
    evt.target.closest('.elements__list-item').remove();
  });

  cardImage.src = cardLinkInput.value;

  cardTitle.textContent = cardNameInput.value;

  cardLinkInput.value = "";

  cardNameInput.value = "";

  elementsList.prepend(imgCard);

  togglePopup(popupNewCard);
};

formNewCard.addEventListener('submit', newCardAdding);



//Delete button functionality


  const deleteButtons = elementsList.querySelectorAll('.card__trash');
  deleteButtons.forEach( function (button) {
    button.addEventListener('click', function(evt){
      const listItem = evt.target.closest('.elements__list-item');
      listItem.remove();
  });
  });
