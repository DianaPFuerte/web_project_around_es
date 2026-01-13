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
initialCards.forEach(function (card) {
  console.log(card.name);
});

// Constants for edit profile section:
const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-popup");
const editProfileCloseBtn = editProfileModal.querySelector(".popup__close");

// Constants for profile form:
//  Inputs inside the edit profile modal
const editProfileNameInput = editProfileModal.querySelector(
  ".popup__input_type_name"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  ".popup__input_type_description"
);
//  Profile info on the page
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

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

// Event listeners for edit profile modal
editProfileBtn.addEventListener("click", handleOpenEditModal); // This function doesn't need to be wrapped in an anonymous function becase it doesn't require any arguments
editProfileCloseBtn.addEventListener("click", () => {
  closeModal(editProfileModal);
});
