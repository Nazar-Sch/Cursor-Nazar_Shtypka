const BASE_URL = 'https://swapi.co/api';
const images = {
    'https://swapi.co/api/people/1/': './img/luke.webp',
    'https://swapi.co/api/people/2/': './img/C-3PO.webp',
    'https://swapi.co/api/people/3/': './img/R2-D2.webp',
    'https://swapi.co/api/people/4/': './img/dartvader.webp',
    'https://swapi.co/api/people/5/': './img/Leia-Organa.webp',
    'https://swapi.co/api/people/6/': './img/OwenLars.webp',
    'https://swapi.co/api/people/7/': './img/BeruCard.webp',
    'https://swapi.co/api/people/8/': './img/R5d4.webp',
    'https://swapi.co/api/people/9/': './img/BiggsHS.webp',
    'https://swapi.co/api/people/10/': './img/Obi-Wan-Kenobi.webp',
    'https://swapi.co/api/people/11/': './img/Tarkin.webp',
    'https://swapi.co/api/people/12/': './img/Greedo.webp',
    'https://swapi.co/api/people/13/': './img/chewbaca.webp',
    'https://swapi.co/api/people/14/': './img/Han-Solo.webp',
    'https://swapi.co/api/people/15/': './img/Porkins.webp',
    'https://swapi.co/api/people/16/': './img/Jabba.webp',
    'https://swapi.co/api/people/17/': './img/Porkins.webp',
    'https://swapi.co/api/people/18/': './img/Raymus.webp',
};

// Functions
async function getCharacterFromAPI(filmId) {
    filmId = document.getElementById('filmId').value;
    loader.classList.add('active');
    const res = await axios.get(BASE_URL + `/films/${filmId}/`);
    return Promise.all(res.data.characters.map(async (el) => {
        const response = await axios.get(el).then((char) => char.data);
        return response;
    }));
};

function renderCharacters(response) {
    let container = document.querySelector('.characters');
    container.innerHTML = '';
    response.forEach(response => {
        const charactersInfo = document.createElement('div');
        charactersInfo.classList = 'charList';
        charactersInfo.innerHTML = `
        <div class="imagesContainer">
        <img src="${getImage(response.url)}" class="image"/>
      </div>
        <p><span class="colorBlue">Name:</span> ${response.name}</p>
        <p><span class="colorBlue">Birth Year:</span> ${response.birth_year}</p>
        <p><span class="colorBlue">Gender:</span> ${response.gender}</p>
        `;
        container.append(charactersInfo);
    })
};
function getActiveCharacters() {
    document.getElementById('characters').classList.remove('hidden');
};

function getHiddenLoader(button) {
    loader.classList.remove('active');
};

let currentPage = 1;
async function getPlanets(currentPage) {
    const res = await axios.get(BASE_URL + `/planets/?page=${currentPage}`);
    return res.data.results;
};

function renderPlanets(planets) {
    let container = document.querySelector('.planets');
    container.innerHTML = '';
    planets.forEach(response => {
        let planetDivEl = document.createElement('div');
        planetDivEl.classList = 'planetsInfo';
        planetDivEl.innerHTML = `
        <p><span class="colorBlue">Name:</span> ${response.name.toUpperCase()}</p>
        <p><span class="colorBlue">Rotation Period:</span> ${response.rotation_period}</p>
        <p><span class="colorBlue">Orbital Period:</span> ${response.orbital_period}</p>
        <p><span class="colorBlue">Diameter:</span> ${response.diameter}</p>
        <p><span class="colorBlue">Diameter:</span> ${response.diameter}</p>
        <p><span class="colorBlue">Climate:</span> ${response.climate}</p>
        <p><span class="colorBlue">Population:</span> ${response.population}</p>
        `;
        container.append(planetDivEl);
    })
    
};

function getImage(url){
    if (images[url] == undefined) {
      return './img/starwarsicon.png';
    } else {
      return images[url];
    }
};



// Buttons listeners
const homeButton = document.querySelector('.logoButton').addEventListener('click', () => {
    document.querySelector('.container').classList.add('hidden');
    document.querySelector('.getInfoButton').classList.remove('hidden');


});
const getInfoButton = document.getElementById('getInfo').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('hidden');
    document.querySelector('.planetsBtn').classList.remove('hidden');
    document.querySelector('.getInfoButton').classList.add('hidden');
    document.getElementById('getData').classList.remove('hidden');
    document.getElementById('wrapper').classList.add('hidden'); 
    document.getElementById('next').classList.add('hidden'); 
    document.getElementById('prev').classList.add('hidden'); 

});
const loader = document.getElementById('loader');
const planet = document.getElementById('planet').addEventListener('click', function() {
    document.getElementById('wrapper').classList.remove('hidden');
    loader.classList.add('active');
    document.querySelector('.characters').classList.add('hidden');
    document.getElementById('planets').classList.remove('hidden');
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
    return getPlanets(currentPage).then(renderPlanets).finally(getHiddenLoader);
});

const prev = document.getElementById('prev');
prev.addEventListener('click', function() {
    loader.classList.add('active');
    if (currentPage === 2) {
        prev.style.cursor = "not-allowed";
    }
    if (currentPage != 1) {
        currentPage--;
        getPlanets(currentPage).then(renderPlanets).finally(getHiddenLoader);
    }
});

const next = document.getElementById('next');
next.addEventListener('click', function() {
    loader.classList.add('active');
    if (currentPage === 5) {
        next.style.cursor = "not-allowed";
    }
if (currentPage != 6) {
    currentPage++;
    getPlanets(currentPage).then(renderPlanets).finally(getHiddenLoader);
}
});

const getData = document.querySelector('.getDataButton').addEventListener('click', () => getCharacterFromAPI(filmId).then(renderCharacters).finally(() => {
    document.getElementById('planets').classList.add('hidden');
    document.getElementById('wrapper').classList.remove('hidden');
    prev.classList.add('hidden');
    next.classList.add('hidden');
    getHiddenLoader();
    getActiveCharacters();
}));