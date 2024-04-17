// Authentication functions

// Function to validate user login
function authenticate(username, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(function(user) {
        return user.username === username && user.password === password;
    });
}
// Function to validate user login
function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let loggedIn;
    let isAuthenticated = users.some(function(user) {
        return user.username === username && user.password === password;
    });
    if (isAuthenticated) {
        loggedIn = true;
        localStorage.setItem("loginConfirmed", loggedIn);
        alert("Login successful. Redirecting to main page...");
        window.location.href = "mainPage.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}