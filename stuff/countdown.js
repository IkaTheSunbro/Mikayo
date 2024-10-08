function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date();
        const timeDiff = targetDate - now;

        if (timeDiff <= 0) {
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById("countdown-days").querySelector('span:last-child').textContent = days;
        document.getElementById("countdown-hours").querySelector('span:last-child').textContent = hours;
        document.getElementById("countdown-minutes").querySelector('span:last-child').textContent = minutes;
        document.getElementById("countdown-seconds").querySelector('span:last-child').textContent = seconds;
    }

    updateCountdown(); // Initial call
    const countdownInterval = setInterval(updateCountdown, 1000); // Update every second
}

// Set your target date
const nextMeetingDate = new Date('2024-10-11T16:30:00'); // Adjust this date
startCountdown(nextMeetingDate);