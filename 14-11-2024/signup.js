document.getElementById("signup_form").addEventListener("submit", (event) => {
    event.preventDefault();

    const usernamePattern = /^[a-zA-Z]{3,}$/;
    const emailPattern = /^[a-zA-Z0-9._+-=]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordPattern = /^[a-zA-Z0-9@!#$%^&]{8,15}$/;

    document.getElementById("username_error").textContent = "";
    document.getElementById("signup_email_error").textContent = "";
    document.getElementById("signup_password_error").textContent = "";
    document.getElementById("confirm_password_error").textContent = "";

    const username = document.getElementById("signup_username").value.trim();
    const email = document.getElementById("signup_email").value.trim();
    const password = document.getElementById("signup_password").value.trim();
    const confirmPassword = document.getElementById("confirm_password").value.trim();

    let isFormValid = true;

    if (!usernamePattern.test(username)) {
        document.getElementById("username_error").textContent = "Username must contain at least 3 letters.";
        isFormValid = false;
    }

    if (!emailPattern.test(email)) {
        document.getElementById("signup_email_error").textContent = "Please enter a valid email format (e.g., example@example.com).";
        isFormValid = false;
    }

 
    if (!passwordPattern.test(password)) {
        document.getElementById("signup_password_error").textContent = "Password must be 8-15 characters long and can include letters, numbers, and special characters (@, !, #, $, %, ^, &).";
        isFormValid = false;
    }


    if (password !== confirmPassword) {
        document.getElementById("confirm_password_error").textContent = "Passwords do not match. Please try again.";
        isFormValid = false;
    }


    if (isFormValid) {
        registerUser(email, password);
    }
});

// Function to add user data to local storage
function registerUser(email, password) {
    const userList = JSON.parse(localStorage.getItem("userList")) || [];
    userList.push({ userEmail: email, userPassword: password });
    localStorage.setItem("userList", JSON.stringify(userList));
    alert("Registration successful! Welcome to My Website.");
    window.location.href = "login.html";
}