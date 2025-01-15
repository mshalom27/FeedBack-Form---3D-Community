document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email').value.trim();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const nameError = document.getElementById('nameError');


    emailError.textContent = '';
    nameError.textContent = '';
    phoneError.textContent = '';


    let valid = true;

    // Validate email
    if (!email) {
      emailError.textContent = 'Email is required.';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = 'Invalid email format.';
      valid = false;
    }

    // Validate name
    if (!name) {
      nameError.textContent = 'Name is required.';
      valid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        nameError.textContent = 'Name must contain only alphabets and spaces.';
        valid = false;
    }

    //validate phone
    if (!phone) {
        phoneError.textContent = 'Phone number is required.';
        valid = false;
      } else if (!/^\d+$/.test(phone)) {
        phoneError.textContent = 'Phone number must contain only digits.';
        valid = false;
      }
  

    // If valid, log the data (simulate form submission)
    if (valid) {
    phoneError.textContent = '';
    nameError.textContent = '';
    emailError.textContent = '';
      
    alert('Form submitted successfully!');
    }


    

  });