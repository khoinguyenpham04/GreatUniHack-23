const flipButton = document.getElementById('flipButton');
const body = document.body;

flipButton.addEventListener('click', () => {
  body.classList.toggle('flipped');
});
