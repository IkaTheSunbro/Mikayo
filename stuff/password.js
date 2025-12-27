function checkPassword() {
    const inputPassword = document.getElementById('passwordInput').value;
    const correctPassword = 'kabaklıturta123457';  // Set your correct password here

    if (inputPassword === correctPassword) {
        document.body.classList.add('show-content');
    } else {
        alert('Website kapalı');
    }
}