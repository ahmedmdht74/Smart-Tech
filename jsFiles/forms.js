const logBtn = document.querySelector('.logBtn');
const form = document.querySelector('.form');
const welcoming = document.querySelector('.welcoming');

let state = false;

logBtn.addEventListener('click', function () {
  if (!state) {
    form.classList.remove('active2'); 
    form.classList.add('active');
    welcoming.textContent = 'Dear!!';
    logBtn.textContent = 'Sign Up';
  } else {
    form.classList.remove('active'); 
    form.classList.add('active2');
    welcoming.textContent = 'Welcome!!';
    logBtn.textContent = 'Log In';
  }
  state = !state; 
});
