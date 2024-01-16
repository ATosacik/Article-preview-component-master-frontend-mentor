const shareButton = document.querySelector('.share-button');
const shareOptions = document.querySelector('.share-options-box');

let isShareOptionsOpen = eval(shareButton.getAttribute('aria-expanded'));

shareButton.addEventListener('click', () => {
  isShareOptionsOpen = !isShareOptionsOpen;
  shareButton.setAttribute('aria-expanded', isShareOptionsOpen);
  shareOptions.setAttribute('data-visible', isShareOptionsOpen);
});