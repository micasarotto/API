const apiKey = 'zC9MkCs9gK7OS0fCJkEpTcvsnVAPXK9G08Ps8mnF'; // Tu API Key de la NASA
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Insertar el título, imagen y descripción en el HTML
        document.getElementById('title').textContent = data.title;
        document.getElementById('image').src = data.url;
        document.getElementById('description').textContent = data.explanation;
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
        document.getElementById('title').textContent = 'Error al cargar los datos';
        document.getElementById('description').textContent = 'No se pudo obtener la información de la NASA.';
    });