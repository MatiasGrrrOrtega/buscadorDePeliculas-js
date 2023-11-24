let searchButton = document.getElementById('searchButton');
let searchInput = document.getElementById('searchInput');
let results = document.getElementById('results');

let apiKey = '0d50be19dac63f89ae365d49222850f8';
let urlBase = 'https://api.themoviedb.org/3/search/movie';
let urlImage = 'https://image.tmdb.org/t/p/w500';

searchButton.addEventListener('click', searchMovies);

function searchMovies() {
    let searchValue = searchInput.value;

    fetch(`${urlBase}?api_key=${apiKey}&query=${searchValue}`)
        .then(response => response.json())
        .then(data => displayMovies(data.results))
}

function displayMovies(movies) {
    let resultsContainer = results;
    resultsContainer.textContent  = '';

    if(movies.length===0){
        resultsContainer.textContent  = 'No results for you search';
        return;
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
    
        let title = document.createElement('h2');
        title.textContent = movie.title;
        
        let releaseDate = document.createElement('p');
        releaseDate.textContent = 'La fecha de lanzamiento fue: ' + movie.release_date;
        
        let overview = document.createElement('p');
        overview.textContent = movie.overview;
        
        let poster = document.createElement('img');
        poster.src = urlImage + movie.poster_path;
        
        movieDiv.appendChild(poster);
        movieDiv.appendChild(title);
        movieDiv.appendChild(releaseDate);
        movieDiv.appendChild(overview);
    
        resultsContainer.appendChild(movieDiv);
    });
}