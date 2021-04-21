

let button = document.querySelector(".profile__edit-button");


let popup =  document.querySelector(".popup");




let cross = document.querySelector(".popup__close");

function popupOpen() {
  popup.classList.add('popup_opened');

  let nameInput = popup.querySelector(".popup__name");
  let jobInput = popup.querySelector(".popup__job");
  nameInput.value = document.querySelector(".profile__name").innerHTML;
  jobInput.value = document.querySelector(".profile__description").innerHTML;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

button.addEventListener('click', popupOpen);

cross.addEventListener('click', popupClose);



let formElement =  document.querySelector(".popup__submit");


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameInput = popup.querySelector(".popup__name");
    let jobInput = popup.querySelector(".popup__job");
    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector(".profile__name");
    let profileJob = document.querySelector(".profile__description");
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('click', formSubmitHandler);
