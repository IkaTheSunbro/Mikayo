function checkPassword() {
    const inputPassword = document.getElementById('passwordInput').value;
    const correctPassword = '313131';  // Set your correct password here

    if (inputPassword === correctPassword) {
        document.body.classList.add('show-content');
    } else {
        alert('Skill Issue');
    }
}