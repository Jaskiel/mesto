

let profileEditButton = document.querySelector(".profile__edit-button");


let popup =  document.querySelector(".popup");

let cross = document.querySelector(".popup__close");

let nameInput = popup.querySelector(".popup__input-item_el_name");

let jobInput = popup.querySelector(".popup__input-item_el_job");

let formElement =  document.querySelector(".popup__submit");

let profileName = document.querySelector(".profile__name");

let profileJob = document.querySelector(".profile__description");

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = document.querySelector(".profile__name").textContent;
  jobInput.value = document.querySelector(".profile__description").textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}


function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupClose();
}

formElement.addEventListener('click', formSubmitHandler);

profileEditButton.addEventListener('click', openPopup);

cross.addEventListener('click', popupClose);
