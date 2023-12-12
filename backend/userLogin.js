
// async function signup(){

//     // Validate inputs
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     var confirmPassword = document.getElementById("confirmpassword").value;
//     var firstName = document.getElementById("firstname").value;
//     var lastName = document.getElementById("lastname").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;

//     // Perform validation checks (add more as needed)
//     if (!username || !password || !confirmPassword || !firstName || !lastName || !email || !phone) {
//         alert('Please fill in all fields.');
//         return;
//     }

//     // if (password.length < 8) {
//     //     alert('Password must be at least 8 characters.');
//     //     return;
//     // }

//     if (password !== confirmPassword) {
//         alert('Passwords do not match.');
//         return;
//     }


//     // Validate Email format (simplified check)
//     // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     // if (!email.match(emailRegex)) {
//     //     alert('Invalid Email format.');
//     //     return;
//     // }

    
//     const data = {
//         username,
//         password,
//         firstName,
//         lastName,
//         phone,
//         email
//     };

//     // Send data to the server using fetch API
//     await fetch('http://localhost:3000/signupUser', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(result => {
//         if (result.success) {
//             alert('Registration successful! Please log in.');
//             // Redirect to login page or handle accordingly
//         } else {
//             alert('Registration failed. Please try again.');
//         }
//     })



// }


// async function addToUserSessions(UserID) {
//     console.log("inside add to session");

//     const data = { UserID };

//     try {
//         const response = await fetch('http://localhost:3000/addToUserSessions', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });

//         const result = await response.json();

//         if (!result.success) {
//             console.error('Error adding to UserSessions');
//         } else {
//             window.location.href = "../frontend/mainDashboard.html";
//         }
//     } catch (error) {
//         console.error('Error during addToUserSessions:', error);
//     }
// }


// async function submitLogin() {

//     // Ensure these elements exist in the DOM
//     const loginUsernameElement = document.getElementById('loginusername');
//     const loginPasswordElement = document.getElementById('loginpassword');

//     if (!loginUsernameElement || !loginPasswordElement) {
//         console.error('Login form elements not found.');
//         return;
//     }

//     const loginUsername = loginUsernameElement.value;
//     const loginPassword = loginPasswordElement.value;

//     const data = {
//         username: loginUsername,
//         password: loginPassword
//     };

//     try {
//         const response = await fetch('http://localhost:3000/loginuser', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });



//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const result = await response.json();



//         if (result.success) {
//             alert('Login successful! CustomerID: ' + result.UserID);

//             await addToUserSessions(result.UserID); // await here

//         } else {
//             console.log('Login failed. Please check your credentials and try again.');
//         }
//     } catch (error) {
//         console.error('Error during login:', error);
//         console.log('An error occurred during login. Please check the console for more details.');
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("signupButton").addEventListener("click", function () {
//         console.log("inside")
//         signup();
//     });

//     document.getElementById("loginButton").addEventListener("click", function (event) {
//         event.preventDefault();  // Prevent default form submission
//         submitLogin();
//     });
// });
async function registerNewUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!username || !password || !confirmPassword || !firstName || !lastName || !email || !phone) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    const userData = {
        username,
        password,
        firstName,
        lastName,
        phone,
        email
    };

    try {
        const response = await fetch('http://159.203.161.159:3000/signupUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const result = await response.json();

        if (result.success) {
            alert('Registration successful! Please log in.');
            // Redirect to login page or handle accordingly
        } else {
            alert('Registration failed. Please try again.');
        }
    } catch (error) {
        console.error('Error during user registration:', error);
    }
}

async function addUserToSession(userID) {
    console.log("Inside addUserToSession");

    const data = { UserID: userID };

    try {
        const response = await fetch('http://159.203.161.159:3000/addToUserSessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!result.success) {
            console.error('Error adding to UserSessions');
        } else {
            window.location.href = "../frontend/mainDashboard.html";
        }
    } catch (error) {
        console.error('Error during addUserToSession:', error);
    }
}

async function performUserLogin() {
    const loginUsername = document.getElementById('loginusername').value;
    const loginPassword = document.getElementById('loginpassword').value;

    if (!loginUsername || !loginPassword) {
        console.error('Login form elements not found.');
        return;
    }

    const loginData = {
        username: loginUsername,
        password: loginPassword
    };

    try {
        const response = await fetch('http://159.203.161.159:3000/loginuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (result.success) {
            alert('Login successful! UserID: ' + result.UserID);
            await addUserToSession(result.UserID);
        } else {
            console.log('Login failed. Please check your credentials and try again.');
            alert('Login failed. Please check your credentials and try again.');
        }
    } catch (error) {
        console.error('Error during user login:', error);
        console.log('An error occurred during login. Please check the console for more details.');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupButton").addEventListener("click", function () {
        console.log("Inside");
        registerNewUser();
    });

    document.getElementById("loginButton").addEventListener("click", function (event) {
        event.preventDefault();  // Prevent default form submission
        performUserLogin();
    });
});
