document.addEventListener("DOMContentLoaded", () => {
    const setupElement = document.getElementById("setup");
    const punchlineElement = document.getElementById("punchline");

    // Make a request to the Official Joke API
    fetch("https://official-joke-api.appspot.com/jokes/random")
        .then(response => response.json())
        .then(data => {
            // Update the webpage with the joke setup and punchline
            setupElement.textContent = data.setup;
            punchlineElement.textContent = data.punchline;
        })
        .catch(error => {
            console.error("Failed to retrieve a joke:", error);
        });
});

