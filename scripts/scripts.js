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

const profileEditButton = document.querySelector(".profile__edit-button");

const popupEdit =  document.querySelector(".popup_type_edit");

const popupNewCard =  document.querySelector(".popup_type_new-card");

const addButton = document.querySelector(".profile__add-button");

const cross = popupEdit.querySelector(".popup__close");

const crossNewCard = popupNewCard.querySelector(".popup__close");

const nameInput = popupEdit.querySelector(".form__input-item_el_name");

const jobInput = popupEdit.querySelector(".form__input-item_el_job");

const cardNameInput = popupNewCard.querySelector(".form__input-item_el_card-name");

const cardLinkInput = popupNewCard.querySelector(".form__input-item_el_card-link");

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


//creating initial image-cards

function createInitialCard(item) {

  const imgCard = imgTemplate.querySelector('.elements__list-item').cloneNode(true);

  const cardImage = imgCard.querySelector('.card__image');

  const cardTitle = imgCard.querySelector('.card__title');

  const likeButton = imgCard.querySelector('.card__like');

  const deleteButton = imgCard.querySelector('.card__trash');

  cardImage.src = item.link;

  cardImage.alt = item.name;

  cardTitle.textContent = item.name;

  likeButton.addEventListener('click', function(evt) {
      evt.target.classList.toggle('card__like_active');
    });


    deleteButton.addEventListener('click', function(evt){
        const listItem = evt.target.closest('.elements__list-item');
        listItem.remove();
    });


   cardImage.addEventListener('click', function(evt) {
        popupImage.src = cardImage.src;
        popupCaption.textContent = cardTitle.textContent;
        togglePopup(popupTypeImage);
      });

  return imgCard;
};



//adding initial image-cards

initialCards.forEach(function (item) {

  const imgCard = createInitialCard(item);

  elementsList.append(imgCard);

});





//popup_type_new-card Toggle

addButton.addEventListener('click', function () {
  cardLinkInput.value = "";

  cardNameInput.value = "";

  togglePopup(popupNewCard);
});

crossNewCard.addEventListener('click', function() {
  togglePopup(popupNewCard);
});



//creating new card functionality

function createCard() {

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

  cardImage.addEventListener('click', function(){
    popupImage.src = cardImage.src;
    popupCaption.textContent = cardTitle.textContent;
    togglePopup(popupTypeImage);
  });

  cardImage.src = cardLinkInput.value;

  cardImage.alt = cardNameInput.value;

  cardTitle.textContent = cardNameInput.value;

  cardLinkInput.value = "";

  cardNameInput.value = "";

  return imgCard;
};

//adding of new-card functionality

function addnewCard(evt) {

  evt.preventDefault();

  const imgCard = createCard();

  elementsList.prepend(imgCard);

  togglePopup(popupNewCard);
};

formNewCard.addEventListener('submit', addnewCard);



//closing popup-image functionality

closePopupTypeImage.addEventListener('click', function(){
    togglePopup(popupTypeImage);
});
