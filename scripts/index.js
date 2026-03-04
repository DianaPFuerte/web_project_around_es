// List of objects for the cards (title and image URL)
let initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

// Show the names of the initial cards in the console
//initialCards.forEach(function (card) {
//  console.log(card.name);
//});

// Constants for edit profile section:
const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-popup");
const editProfileCloseBtn = editProfileModal.querySelector(".popup__close");

// Constants for profile form:
//  Inputs inside the edit profile modal
const editProfileNameInput = editProfileModal.querySelector(
  ".popup__input_type_name",
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  ".popup__input_type_description",
);

//  Profile info on the page
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// Constants for submit profile section:
let formElement = document.querySelector("#edit-profile-form");

// Card container
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardContainerGlobal = document.querySelector(".cards__list");

// Constants for add card section:
const addCardBtn = document.querySelector(".profile__add-button");
const addCardModal = document.querySelector("#new-card-popup");
const addCardCloseBtn = addCardModal.querySelector(".popup__close");

// Constants for image preview modal
const imageModal = document.querySelector("#image-popup");
const imageModalImg = imageModal.querySelector(".popup__image");
const imageModalCaption = imageModal.querySelector(".popup__caption");
const imageModalCloseBtn = imageModal.querySelector(".popup__close");

// Constants for submit profile section:
let formElementCard = document.querySelector("#new-card-form");

//  Inputs inside the add card modal
const addCardNameInput = addCardModal.querySelector(
  ".popup__input_type_card-name",
);
const addCardLinkInput = addCardModal.querySelector(".popup__input_type_url");

// Functions to open and close modals
function openModal(modal) {
  modal.classList.add("popup_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

// Function to fill the profile form
function fillProfileForm() {
  editProfileNameInput.value = profileName.textContent;
  editProfileDescriptionInput.value = profileDescription.textContent;
}

// Function to handle opening the edit profile modal
function handleOpenEditModal() {
  fillProfileForm();
  openModal(editProfileModal);
}

// Function to handle profile form submission
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Prevent default form submission behavior

  let nameInput = editProfileModal.querySelector(".popup__input_type_name");
  let jobInput = editProfileModal.querySelector(
    ".popup__input_type_description",
  );

  let profileName = document.querySelector(".profile__title");
  let profileDescription = document.querySelector(".profile__description");

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closeModal(editProfileModal);
}

// Event listeners for edit profile modal
editProfileBtn.addEventListener("click", handleOpenEditModal); // This function doesn't need to be wrapped in an anonymous function because it doesn't require any arguments
editProfileCloseBtn.addEventListener("click", () => {
  closeModal(editProfileModal);
});
formElement.addEventListener("submit", handleProfileFormSubmit);

// Function to create a card element
function getCardElement(
  name = "Sin título",
  link = "./images/placeholder.jpg",
) {
  const cardElement = cardTemplate.cloneNode(true);
  const nameElement = cardElement.querySelector(".card__title");
  const imageElement = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  nameElement.textContent = name;
  imageElement.src = link;
  imageElement.alt = name;

  // Event listener for buttons
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_is-active");
  });
  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  imageElement.addEventListener("click", () => {
    // fill modal content and open it
    imageModalImg.src = link;
    imageModalImg.alt = name;
    imageModalCaption.textContent = name;
    openModal(imageModal);
  });

  return cardElement;
}

// Function to render a card in the container
function renderCard(name, link, cardContainer) {
  const cardElement = getCardElement(name, link);
  cardContainer.prepend(cardElement);
}

// Render initial cards
initialCards.forEach((card) => {
  renderCard(card.name, card.link, cardContainerGlobal);
});

// Function to handle the opening of the add card modal
function handleOpenAddCardModal() {
  // reset the form fields so the placeholder text ("Título", "Enlace a la imagen")
  // is visible each time the popup opens
  addCardNameInput.value = "";
  addCardLinkInput.value = "";
  openModal(addCardModal);
}

// Function to handle add card form submission
function handleCardFormSubmit(evt) {
  evt.preventDefault(); // Prevent default form submission behavior
  renderCard(
    addCardNameInput.value,
    addCardLinkInput.value,
    cardContainerGlobal,
  );
  closeModal(addCardModal);
}

// Event listeners for add card modal
addCardBtn.addEventListener("click", handleOpenAddCardModal);
addCardCloseBtn.addEventListener("click", () => {
  closeModal(addCardModal);
});
formElementCard.addEventListener("submit", handleCardFormSubmit);

// close button for image modal
imageModalCloseBtn.addEventListener("click", () => {
  closeModal(imageModal);
});
