document.addEventListener('DOMContentLoaded', () => {
    // Get the form elements
    const form = document.querySelector('form');
    const nameInput = document.getElementById('formGroupExampleInput');
    const phoneInput = document.getElementById('formGroupExampleInput2');
    const submitButton = document.querySelector('[id="contact-submit"]');

    // Function to check if all inputs are valid
    function checkFormValidity() {
        return nameInput.checkValidity() && phoneInput.checkValidity();
    }

    // Update button state based on form validity
    function updateSubmitButton() {
        submitButton.disabled = !checkFormValidity();
    }

    // Add event listeners to inputs
    [nameInput, phoneInput].forEach(input => {
        input.addEventListener('input', updateSubmitButton);
    });

    // Initial check when the page loads
    updateSubmitButton();

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    });
    
});
