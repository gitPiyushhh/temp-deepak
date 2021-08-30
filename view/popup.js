'use-strict';

////////////////////////////////////////////////
///////// Importance pop-up Functionality 😋

const popupCloseBtn = document.querySelector('.popup__close');
const overlayImportance = document.querySelector('.overlay--importance');
const popupImportance = document.getElementById('popupImportance');

let animationCount = 0;

popupCloseBtn.addEventListener('click', function(e) {
    e.preventDefault();
    popupImportance.classList.toggle('hidden');
    overlayImportance.classList.toggle('hidden');
    (animationCount = 1);
    console.log('Hello world');
});
