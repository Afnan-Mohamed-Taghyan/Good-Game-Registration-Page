document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let hasError = false; 

    // name validation 
    const fullName = document.getElementById("fullName").value;
    const nameRegex = /^[A-Za-z\s]+$/; 
    const fullNameError = document.getElementById("fullNameError");
    if (!nameRegex.test(fullName)) {
        fullNameError.style.display = "block"; 
        hasError = true;
    } else {
        fullNameError.style.display = "none"; 
    }

    // Email validation 
    const email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailError = document.getElementById("emailError");
    if (!emailRegex.test(email)) {
        emailError.style.display = "block"; 
        hasError = true;
    } else {
        emailError.style.display = "none"; 
    }

    // Password validation 
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,25}$/;
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // Password strength validation
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters, include a number, both lower and uppercase letters, and a special character!";
        passwordError.style.display = "block";
        hasError = true;
    } else {
        passwordError.style.display = "none"; 
    }

    // Confirm password matche
    if (password !== confirmPassword) {
        confirmPasswordError.style.display = "block"; 
        hasError = true;
    } else {
        confirmPasswordError.style.display = "none"; 
    }
    // no errors, data stored in localStorage
    if (!hasError) {
        // Save the valid form data into localStorage
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password); 

        // alert("Form submitted successfully! Data has been saved to localStorage.");
         // Clear data
         document.getElementById("signupForm").reset();
    }
    });
     // Retrieve data from localStorage if available and pre-fill the form
     window.onload = function() {
        const storedName = localStorage.getItem('fullName');
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (storedName) document.getElementById('fullName').value = storedName;
        if (storedEmail) document.getElementById('email').value = storedEmail;
        if (storedPassword) document.getElementById('password').value = storedPassword;
    document.getElementById("signupForm").reset();
    };
