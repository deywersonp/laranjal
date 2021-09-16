//Document Variables
let unityInfo = document.querySelector('input.input-info1');
let dateInfo = document.querySelector('input.input-info2');

// Selected Table Modal Variables
let modal = document.querySelector('div.modal-wrapper');
let closeButton = document.querySelector('button.modal-close-button');
let continueButton = document.querySelector('button.modal-continue-button');
let modalInputTable = document.querySelector('input#modal-input-table');
let modalInputUnity = document.querySelector('input#modal-input-unity');
let modalInputDate = document.querySelector('input#modal-input-date');

// Guideline Modal Variables
let guidelineModal = document.querySelector('div.modal-wrapper-guidelines');
let backButton = document.querySelector('div.modal-guidelines-header .back');
let guidelineInputTable = document.querySelector('input#modal-guidelines-input-table');
let guidelineInputUnity = document.querySelector('input#modal-guidelines-input-unity');
let guidelineInputDate = document.querySelector('input#modal-guidelines-input-date');


let profileModal = document.querySelector('div.profile-modal-wrapper');
let buttonProfileModal = document.querySelector('button.profile-modal-button');
let profilePhoto = document.querySelector('img.profile-photo');
let profileNickname = document.querySelector('p.profile-nickname');
let profileEmail = document.querySelector('p.profile-email');

closeButton.addEventListener('click', closeModal);

continueButton.addEventListener('click', openGuidelineModal);
backButton.addEventListener('click', closeGuidelineModal);


buttonProfileModal.addEventListener('click', () => {
  profileModal.classList.remove('active');
})

function getInformation(event) {
  let tableId = event.currentTarget.id
  modalInputTable.value = tableId;
  modalInputUnity.value = unityInfo.value;
  modalInputDate.value = dateInfo.value;

  guidelineInputTable.value = tableId;
  guidelineInputUnity.value = unityInfo.value
  guidelineInputDate.value = dateInfo.value;

  openModal();
};

function getProfileInformation(event) {
  profileModal.classList.add('active');
  let profileInfo = event.currentTarget;

  profileNickname.innerHTML = profileInfo.getAttribute('user-nickname');
  profileEmail.innerHTML = profileInfo.getAttribute('user-email');
  console.log("Fogo!")
};

function openModal() {
  modal.classList.add('active');
};

function closeModal() {
  modal.classList.remove('active');
};

function openGuidelineModal() {

  guidelineModal.classList.add('active');
};

function closeGuidelineModal() {
  closeModal();
  guidelineModal.classList.remove('active');
};