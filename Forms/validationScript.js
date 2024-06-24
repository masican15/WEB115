// JavaScript code for form validation
function validateForm(event) {
      
    
  // Prevent form from submitting
  event.preventDefault();
  // Retrieve the input field value
  let inputField = document.getElementById('inputField').value;
  // Regular expression pattern for alphanumeric input
  let pattern = /^[a-z0-9]+$/i;
  // Check if the input value matches the pattern
  if (pattern.test(inputField) == true) {
    // Valid input: display confirmation and submit the form
    alert('Valid input. Form submitted!');
    document.getElementById('myForm').submit();
  }
  // Invalid input: display error message
  else {
    alert('Invalid input.');
  }
}

let form = document.getElementById('myForm');
form.addEventListener('submit', validateForm);