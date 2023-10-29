document.getElementById('fetchDog').addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const dogImage = document.getElementById('dogImage');
            const imageContainer = document.getElementById('imageContainer');
            dogImage.src = data.message;
            imageContainer.style.display = 'block'; // Show the container
        })
        .catch(error => console.error(error));
});