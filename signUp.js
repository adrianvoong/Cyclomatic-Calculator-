// Function to create an account
function createAccount() {
    let firstName = document.getElementById("firstName").value;
    let surname = document.getElementById("surname").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Prevent duplicate usernames
    if (isUsernameTaken(username)) {
        alert("Username already exists. Please choose a different one.");
        return;
    }

    // Establishing a user identity             
    var newUser = {
        firstName: firstName,
        surname: surname,
        username: username,
        password: password
    };

    // Add user to user list
    saveUser(newUser);
    
    alert("Account created successfully. You can now login.");
}

// Function to save user data in local storage
function saveUser(user) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

// Function to check if a username is already taken
function isUsernameTaken(username) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(function(user) {
        return user.username === username;
    });
}

// Function to go back to login screen
function goBack() {
    window.location.href = "loginPage.html";
}