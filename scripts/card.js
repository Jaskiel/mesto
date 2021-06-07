const popupTypeImage = document.querySelector('.popup_type_image');

const popupImage = popupTypeImage.querySelector('.popup__image');

const popupCaption = popupTypeImage.querySelector('.popup__caption');

import { openPopup } from './utils/utils.js';

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
  this._cardImage = this._element.querySelector('.card__image');
  this._cardTitle = this._element.querySelector('.card__title');
  this._cardLike = this._element.querySelector('.card__like');
  this._cardImage.src = this._image;
  this._cardImage.alt = this._text;
  this._cardTitle.textContent = this._text;
  this._setEventListeners();
  return this._element;
  }

  _openPopupTypeImage() {
    popupImage.src = this._cardImage.src;
    popupImage.alt = this._cardTitle.textContent;
    popupCaption.textContent = this._cardTitle.textContent;
    openPopup(popupTypeImage);
  }

  _toggleLike() {
    this._cardLike.classList.toggle('card__like_active');
  }

  _removeListItem() {
    this._element.remove();
  }

  _setEventListeners() {
  this._cardLike.addEventListener('click', () => {
    this._toggleLike();
  });

  this._element.querySelector('.card__trash').addEventListener('click', (evt) => {
    this._removeListItem();
  });

  this._cardImage.addEventListener('click', () => {
    this._openPopupTypeImage();
  });

}
}

export { Card };
