// dom declaration 
const form = document.getElementsByTagName('form');
const username = document.getElementById('username');
const dateOfBirth = document.getElementById('date-of-Birth');
const email = document.getElementById('email');
const password = document.getElementById('password');

function checkInputs() {
    // trim the whitespaces 
    const usernameValue = username.value.trim();
    const dateOfBirthValue = dateOfBirth.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // the USername validation
    if (usernameValue === '') {
        showError(username, 'Username cannot be blank.');
    } else {
        showSuccess(username);
    };

    // for the date validation
    if (dateOfBirthValue === '') {
        showError(dateOfBirth, 'Date cannot be blank')
    } else if (!isDateOfBirth(dateOfBirthValue)) {
        showError(dateOfBirth, 'Date pattern is not valid.')
    } else {
        showSuccess(dateOfBirth)
    };

    // for the email validation
    if (emailValue === '') {
        showError(email, 'Email cannot be blank.')
    } else if (!isEmail(emailValue)) {
        showError(email, 'Not a valid Email');
    } else {
        showSuccess(email)
    }

    // for the Password validation
    if (passwordValue === '') {
        showError(password, 'Password cannot be blank');
    } else {
        showSuccess(password);
    }
}

// to prevent the page from refreshing whenever we click submit
form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

// for the error and success messages 
function showError(input, message) {
    const formVal = input.parentElement;
    const small = formVal.querySelector('small');
    formVal.className = 'form-val error';
    small.innerText = message;
}

function showSuccess(input) {
    const formVal = input.parentElement;
    formVal.className = 'form-val success';
}

// for the email regular expression 
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// for the date regular expression
function isDateOfBirth(dateOfBirth) {
    var parts = dateOfBirth.split(/[\/\-\.]/);

    if (parts.length < 3) {
        return false;
    }
    var dt = new Date(parts[2], parts[0] - 1, parts[1]);
    console.log("date is ", dt.toString());
    return (dt && dt.getMonth() === parseInt(parts[0], 10) - 1);
}