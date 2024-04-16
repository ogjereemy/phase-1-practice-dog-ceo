console.log('%c HI', 'color: firebrick')
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// let imageContainer = document.getElementById("dog-image-container")

// function fetchImage(){
//     fetch("https://dog.ceo/api/breeds/image/random/4")
//     .then(response => response.json)
//     .then(data => {
//         let imageUrl = data.message
//         let img = document.createElement("img")
//         img.src = imageUrl
//         imageContainer.appendChild(img)
//         // console.log(imageUrl)
    

//      })
// }
// fetchImage()

// index.js

document.addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const imagesContainer = document.getElementById('dog-image-container');

            data.message.forEach(imageUrl => {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.alt = 'Dog Image';
                imagesContainer.appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error('There was a problem with fetching the images:', error);
        });
     async function fetchBreedsAndDisplay() {
            try {
                const response = await fetch("https://dog.ceo/api/breeds/list/all");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const breeds = Object.keys(data.message);
                const brdsList = document.getElementById('dog-breeds');
                breeds.forEach(breed => {
                    const breedItem = document.createElement('li');
                    breedItem.textContent = breed;
                    brdsList.appendChild(breedItem);
                });
            } catch (error) {
                console.error('Error fetching and displaying breeds:', error);
            }
        }
        
        window.onload = async function() {
            await fetchBreedsAndDisplay();
    };
    const brdsList = document.getElementById('dog-breeds');
    brdsList.addEventListener('click', function(event) {
        const clickItem = event.target;
        if (clickItem.tagName === 'LI') {
            clickItem.style.color = 'red'; // Change font color to red
        }
    });
    
        // Fetch and display breeds on page load
        fetchBreedsAndDisplay();
    
        // Filter breeds based on selected letter
        const brdFilter = document.getElementById('breed-dropdown');
        brdFilter.addEventListener('change', async function() {
            const selectedLetter = brdFilter.value;
            const brdsList = document.getElementById('dog-breeds');
            const breeds = brdsList.querySelectorAll('li');
            breeds.forEach(breed => {
                const breedName = breed.textContent.toLowerCase();
                if (breedName.startsWith(selectedLetter)) {
                    breed.style.display = 'block'; // Show breeds starting with selected letter
                } else {
                    breed.style.display = 'none'; // Hide breeds not starting with selected letter
                }
            });
        });
    

});
