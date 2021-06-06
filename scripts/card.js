const popupTypeImage = document.querySelector('.popup_type_image');

const popupImage = popupTypeImage.querySelector('.popup__image');

const popupCaption = popupTypeImage.querySelector('.popup__caption');

//popup opening functionality

function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', closeByEscape);
}

//popup closing functionality

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', closeByEscape);
}

//close Popup by click on ESC button function

function closeByEscape(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}



 class Card {
	constructor(data, cardSelector) {
		this._text = data.name;
		this._image = data.link;
    this._cardSelector = cardSelector;
	}

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.elements__list-item')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
  this._element = this._getTemplate();

  this._element.querySelector('.card__image').src = this._image;
  this._element.querySelector('.card__title').textContent = this._text;
  this._setEventListeners();
  return this._element;
  }



  _openPopupTypeImage() {
    popupImage.src = this._element.querySelector('.card__image').src;
    popupCaption.textContent = this._element.querySelector('.card__title').textContent;
    openPopup(popupTypeImage);
  }

  _toggleLike() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active');
  }

  _removeListItem() {
    this._element.remove();
  }


  _setEventListeners() {
  this._element.querySelector('.card__like').addEventListener('click', () => {
    this._toggleLike();
  });

  this._element.querySelector('.card__trash').addEventListener('click', (evt) => {
    this._removeListItem();
  });

  this._element.querySelector('.card__image').addEventListener('click', () => {
    this._openPopupTypeImage();
  });

}
}

export {openPopup, closePopup, closeByEscape, Card};
