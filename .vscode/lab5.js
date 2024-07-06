function handleSubmit() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;

    if (!firstName || !lastName || !email || !password || !dob) {
        alert("All fields are required.");
        return false;
    }

    if (!password.includes('!') && !password.includes('?')) {
        alert("Password must contain at least one special character (! or ?).");
        return false;
    }

    var user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password.replace(/./g, '*'),
        dob: dob
    };
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Registration Successful</h3>
        <p>First Name: ${user.firstName}</p>
        <p>Last Name: ${user.lastName}</p>
        <p>Email: ${user.email}</p>
        <p>Password: ${user.password}</p>
        <p>Date of Birth: ${user.dob}</p>
    `;

    return false; 
}
