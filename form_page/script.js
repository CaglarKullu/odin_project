document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit-btn').addEventListener('click', function(event) {
        event.preventDefault();
        if (validateForm()) {
            console.log('Form submitted successfully!');
        } else {
            console.log('Form submission failed. Please check the highlighted fields.');
        }
    });

    function validateName(nameId, readableName) {
        const nameVar = document.getElementById(nameId).value;
        const nameError = document.getElementById(nameId + "_error");

        if (nameVar.trim() === '') {
            nameError.textContent = `${readableName} is required.`;
            return false;
        } else if (nameVar.length < 2) {
            nameError.textContent = `${readableName} must be at least 2 characters long.`;
            return false;
        } else if (!/^[a-zA-Z]+$/.test(nameVar)) {
            nameError.textContent = `${readableName} can only contain letters.`;
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }

    function validateFirstName() {
        return validateName("first_name", "First name"); 
    }

    function validateLastName() {
        return validateName("last_name", "Last name"); 
    }

    function validateEmail() {
        const email = document.getElementById("email").value;
        const emailError = document.getElementById("email_error");

        if (email.trim() === '') {
            emailError.textContent = 'Email is required.';
            return false;
        } else if (!/\S+@\S+\.\S+/.test(email)) { 
            emailError.textContent = 'Email is invalid.';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    function validatePhoneNumber() {
        const phoneNumber = document.getElementById("phone").value;
        const phoneNumberError = document.getElementById("phone_error");

        if (phoneNumber.trim() === '') {
            phoneNumberError.textContent = 'Phone number is required.';
            return false;
        } else if (!/^\d{3}-\d{3}-\d{4}$/.test(phoneNumber)) { 
            phoneNumberError.textContent = 'Phone number is invalid.';
            return false;
        } else {
            phoneNumberError.textContent = '';
            return true;
        }
    }

    function validatePassword() {
        const password = document.getElementById("password").value;
        const passwordError = document.getElementById("password_error");

        if (password.trim() === '') {
            passwordError.textContent = 'Password is required.';
            return false;
        } else if (password.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
            return false;
        } else if (!/[A-Z]/.test(password)) {
            passwordError.textContent = 'Password must contain at least one uppercase letter.';
            return false;
        } else if (!/[a-z]/.test(password)) {
            passwordError.textContent = 'Password must contain at least one lowercase letter.';
            return false;
        } else if (!/[0-9]/.test(password)) {
            passwordError.textContent = 'Password must contain at least one number.';
            return false;
        } else {
            passwordError.textContent = '';
            return true;
        }
    }

    function validateConfirmPassword() {
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm_password").value;
        const confirmPasswordError = document.getElementById("confirm_password_error");

        if (confirmPassword.trim() === '') {
            confirmPasswordError.textContent = 'Confirm password is required.';
            return false;
        } else if (confirmPassword !== password) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            return false;
        } else {
            confirmPasswordError.textContent = '';
            return true;
        }
    }

    function validateForm() {
        const isValidFirstName = validateFirstName();
        const isValidLastName = validateLastName();
        const isValidEmail = validateEmail();
        const isValidPhone = validatePhoneNumber();
        const isValidPassword = validatePassword();
        const isValidConfirmPassword = validateConfirmPassword();

        return isValidFirstName && isValidLastName && isValidEmail && isValidPhone && isValidPassword && isValidConfirmPassword;
    }
});
