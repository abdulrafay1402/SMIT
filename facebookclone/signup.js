const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

function validateEmail(email) {
    return emailRegex.test(email);
}

function validatePassword(password) {
    return passwordRegex.test(password);
}

function validateDOB(day, month, year) {
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age >= 18;
}

function emailExists(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email.toLowerCase() === email.toLowerCase());
}

document.getElementById('create-button').addEventListener('click', function(event) {
    event.preventDefault();
    
    const firstName = document.querySelector('input[placeholder="First name"]').value.trim();
    const lastName = document.querySelector('input[placeholder="Surname"]').value.trim();
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const email = document.querySelector('.email').value.trim();
    const password = document.querySelector('.password').value.trim();
    
    if (firstName === "") {
        alert("Please enter your first name.");
        return;
    }
    
    if (lastName === "") {
        alert("Please enter your surname.");
        return;
    }
    
    if (!validateDOB(parseInt(day), parseInt(month), parseInt(year))) {
        alert("You must be 18 years or older to sign up.");
        return;
    }
    
    if (!gender) {
        alert("Please select your gender.");
        return;
    }
    
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }
    
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    
    if (emailExists(email)) {
        alert("An account with this email already exists. Please log in.");
        return;
    }
    
    if (password === "") {
        alert("Please enter a password.");
        return;
    }
    
    if (!validatePassword(password)) {
        alert("Password must be at least 8 characters long and contain at least one number and one special character.");
        return;
    }
    
    const user = {
        firstName: firstName,
        lastName: lastName,
        fullName: firstName + " " + lastName,
        dob: {
            day: day,
            month: month,
            year: year
        },
        gender: gender.value,
        email: email,
        password: password,
        createdAt: new Date().toISOString()
    };
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    alert("Sign up successful! Welcome to Facebook, " + firstName + "!");
    window.location.href = "home.html";
});