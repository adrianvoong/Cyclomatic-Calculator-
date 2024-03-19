// Authentication functions

// Function to validate user login
function authenticate(username, password) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(function(user) {
        return user.username === username && user.password === password;
    });
}
