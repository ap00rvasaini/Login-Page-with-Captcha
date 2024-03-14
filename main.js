// Generate a random captcha containing alphabets and numbers
function generateCaptcha() {
    const captchaLength = 6;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@!&%$?';
    let captcha = '';
    for (let i = 0; i < captchaLength; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('captchaDisplay').textContent = captcha;
  }
  
  // Validate the entered captcha
  function validateForm() {
    const captcha = document.getElementById('captchaDisplay').textContent;
    const userInput = document.getElementById('captchaInput').value;
  
    if (userInput !== captcha) {
      alert('Captcha is incorrect!');
      generateCaptcha(); // Regenerate captcha
      return false; // Prevent form submission
    }
  
    // Validate phone number
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (!phoneNumber.startsWith('+91 ') || phoneNumber.length !== 14) {
      alert('Phone number is invalid! It should start with "+91 " and have 10 digits.');
      return false; // Prevent form submission
    }
  
    // Validate age
    const age = parseInt(document.getElementById('age').value);
    if (age <= 18) {
      alert('Age should be more than 18.');
      return false; // Prevent form submission
    }
  
    // Validate email
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
      alert('Email is invalid! It should contain "@" symbol.');
      return false; // Prevent form submission
    }
  
    // If all validations pass, allow form submission
    return true;
  }
  
  // Generate captcha on page load
  window.onload = generateCaptcha;