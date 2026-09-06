const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('toggle');

let ispasswordVisible = false;

toggleButton.addEventListener('click', () => {
    ispasswordVisible = !ispasswordVisible; 
    if (ispasswordVisible) {
        passwordInput.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = 'Show';
    }
})