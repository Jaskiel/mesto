

let profileEditButton = document.querySelector(".profile__edit-button");


let popup =  document.querySelector(".popup");

let cross = document.querySelector(".popup__close");

let nameInput = popup.querySelector(".form__input-item_el_name");

let jobInput = popup.querySelector(".form__input-item_el_job");

let profileName = document.querySelector(".profile__name");

let profileJob = document.querySelector(".profile__description");

let form = document.querySelector(".form");

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
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

form.addEventListener('submit', formSubmitHandler);

profileEditButton.addEventListener('click', openPopup);

cross.addEventListener('click', popupClose);
