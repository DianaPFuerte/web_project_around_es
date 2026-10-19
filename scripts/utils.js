// Close the opened modal when pressing Escape
function handleEscapeClose(event) {
  if (event.key === "Escape") {
    const openedModal = document.querySelector(".popup_is-opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
}

// Close the modal when clicking on the overlay (outside the content)
export function handleOverlayClick(event) {
  if (event.target.classList.contains("popup")) {
    closeModal(event.target);
  }
}

// Open a modal and start listening for Escape
export function openModal(modal) {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscapeClose);
}

// Close a modal and stop listening for Escape
export function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscapeClose);
}
