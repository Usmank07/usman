document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    
    if (!firstName || !lastName || !email || !password || !dob) {
        displayResult('Registration Failed: All fields must be present.');
        return;
    }
    
    if (!password.includes('!') && !password.includes('?')) {
        displayResult('Registration Failed: Password must contain a special character (! or ?).');
        return;
    }
    
    const user = {
        firstName,
        lastName,
        email,
        password: '*'.repeat(password.length),
        dob
    };
    
    displayResult(`Registration Successful:
                   First Name: ${user.firstName}
                   Last Name: ${user.lastName}
                   Email: ${user.email}
                   Password: ${user.password}
                   Date of Birth: ${user.dob}`);
});

function displayResult(message) {
    document.getElementById('result').innerHTML = `<p>${message}</p>`;
}
