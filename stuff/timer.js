// stuff/timer.js
const startDate = new Date('2023-08-31T00:00:00'); // Set the start date and time

function updateCounter() {
    const today = new Date();
    
    // Calculate the difference in milliseconds
    const timeDifference = today - startDate;

    // Calculate days, hours, minutes, and seconds
    const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days
    const hoursPassed = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Remaining hours
    const minutesPassed = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // Remaining minutes
    const secondsPassed = Math.floor((timeDifference % (1000 * 60)) / 1000); // Remaining seconds

    // Update the text content of each circle, preserving the labels
    document.getElementById('days').querySelector('span:last-child').innerText = daysPassed;
    document.getElementById('hours').querySelector('span:last-child').innerText = hoursPassed;
    document.getElementById('minutes').querySelector('span:last-child').innerText = minutesPassed;
    document.getElementById('seconds').querySelector('span:last-child').innerText = secondsPassed;
}

// Update the counter immediately and then every second
updateCounter();
setInterval(updateCounter, 1000); // Refresh every second