function updateClock(timeZone) {
    const options = { timeZone, timeStyle: "medium", hour12: false };
    const clockElement = document.getElementById("clock");

    // Create a function to update the clock with the current time in the specified time zone
    function update() {
        const currentTime = new Date().toLocaleTimeString([], options);
        clockElement.innerHTML = `<div class="time">${currentTime}</div><div>in ${timeZone}</div>`;

    }

    // Call the update function immediately to display the time
    update();

    // Update the clock every second
    setInterval(update, 1000);
}

const timeZones = [
    'America/New_York',
    'America/Los_Angeles',
    'Europe/London',
    'Asia/Tokyo',
    'Australia/Sydney',
    'Asia/Kolkata',
    'Europe/Paris',
    'Africa/Lagos',
    'America/St_Johns',
    'Australia/Adelaide'
];

// Choose a random time zone when the script is initially called
const randomIndex = Math.floor(Math.random() * timeZones.length);
const randomTimeZone = timeZones[randomIndex];

// Call the updateClock function with the random time zone
updateClock(randomTimeZone);
