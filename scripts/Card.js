// Card class: creates a card with title and image from a template
export default class Card {
  constructor(data, templateSelector, handleImageClick) {
    this._name = data.name || "Sin título";
    this._link = data.link || "./images/placeholder.jpg";
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick; // Opens the image modal (comes from index.js)
  }

  // Clone the card element from the template
  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  // Handler for the like button
  _handleLikeClick() {
    this._likeButton.classList.toggle("card__like-button_is-active");
  }

  // Handler for the delete button
  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }

  // Event listeners for the card buttons and image
  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick();
    });
    this._image.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }

  // Public method: returns the card filled with data and ready to use
  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector(".card__image");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__delete-button");

    // Fill card content
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
