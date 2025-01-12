// 2-snackbar.js
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const delayInput = event.target.elements.delay.value;
  const state = event.target.elements.state.value;

  const delay = parseInt(delayInput, 10);

  if (isNaN(delay) || delay <= 0) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a valid delay in milliseconds.',
    });
    return;
  }

  // Create a promise
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  // Handle the promise
  promise
    .then(result => {
      iziToast.success({
        title: '✅ Success',
        message: `Fulfilled promise in ${result}ms`,
      });
    })
    .catch(error => {
      iziToast.error({
        title: '❌ Error',
        message: `Rejected promise in ${error}ms`,
      });
    });
});
