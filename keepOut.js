const countdown = 5;
let countdownInterval;
let countStarted = false;
let begin;
let bound = false;

const particles = [];
const container = document.getElementById('particles-container');
const numParticles = 100;
const particleRadius = 5;
const initialSpeed = 20;
let acceleration = 0.2; // Define acceleration
let rectX;
let rectY;

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rect = moveRectangle.getBoundingClientRect(); // Get the rectangle's position and size

    if (
        mouseX >= rect.left &&
        mouseX <= rect.right &&
        mouseY >= rect.top &&
        mouseY <= rect.bottom
    ) {
        if (!countStarted) {
            countStarted = true;
            startCountdown();
            moveRectangle.style.backgroundColor = "red";
        }
    }
});

function updateCountdown() {
    const now = new Date();
    const seconds = now.getSeconds();
    if ((begin - seconds)%10 > 0) {
        moveRectangle.textContent = "Activated \n" + (begin - seconds)% 10;
    } else {
        clearInterval(countdownInterval);
        const rect = moveRectangle.getBoundingClientRect();
        rectX = rect.left;
        rectY = rect.top;
        hideRectangle();
        //moveRectangle.textContent = "Time's up!";
        //moveRectangle.style.backgroundColor = "green";
        // Prevent reinitialization
        if (particles.length === 0) {
            initializeParticles();
        }

        setTimeout(removeParticles, 10000);
    }
}



function startCountdown() {
    const now = new Date();
    const seconds = now.getSeconds();
    begin = seconds + countdown;
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}

function hideRectangle() {
    moveRectangle.style.display = 'none'; // Hide the rectangle by setting its display property to 'none'
}

function initializeParticles() {
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        container.appendChild(particle);
        //const rect = moveRectangle.getBoundingClientRect();
        const x = rectX + Math.random() * 200;
        const y = rectY + Math.random() * 100;
        const angle = (Math.PI * 7) /6  + (Math.PI *2 / 3) * Math.random();
        const vx = (Math.random() * initialSpeed * Math.cos(angle));
        const vy = (Math.random() * initialSpeed * Math.sin(angle));

        particles.push({
            element: particle,
            x,
            y,
            vx,
            vy,
        });
    }

    requestAnimationFrame(animateParticles);
}

function applyPhysics(particle) {
    // Apply physics laws (e.g., gravity and simple collisions)
    particle.vy += acceleration; // Apply gravity

    // Update position
    particle.x += particle.vx;
    particle.y += particle.vy;

    // Reflect particles off walls
    if (particle.x < 0 || particle.x > window.innerWidth) {
        particle.vx *= -0.7;
    }
    if (particle.y < 0 || particle.y > window.innerHeight) {
        particle.vy *= -0.7;
    }
}

function updateParticlePosition(particle) {
    // Update the particle's visual position
    particle.element.style.left = particle.x - particleRadius + 'px';
    particle.element.style.top = particle.y - particleRadius + 'px';
}

function animateParticles() {
    for (const particle of particles) {
        applyPhysics(particle);
        updateParticlePosition(particle);
    }

    requestAnimationFrame(animateParticles);
}

function removeParticles() {
    for (const particle of particlesToRemove) {
        // Remove the element from the DOM
        container.removeChild(particle.element);

        // Find the index of the particle in the particles array
        const index = particles.indexOf(particle);

        // Remove the particle from the particles array
        if (index > -1) {
            particles.splice(index, 1);
        }
    }
}