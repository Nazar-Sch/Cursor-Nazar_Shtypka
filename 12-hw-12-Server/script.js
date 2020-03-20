const BASE_URL = 'https://swapi.co/api';

// Functions
async function getCharacterFromAPI(film) {
    loader.classList.add('active');
    const res = await axios.get(BASE_URL + `/films/${film}/`);
    return Promise.all(res.data.characters.map(async (el) => {
        const response = await axios.get(el).then((char) => char.data);
        return response;
    }));
}

function renderCharacters(response) {
    let container = document.querySelector('.characters');
    container.innerHTML = '';
    response.forEach(response => {
        const charactersInfo = document.createElement('div');
        charactersInfo.classList = 'charList';
        charactersInfo.innerHTML = `
        <p><span class="colorBlue">Name:</span> ${response.name}</p>
        <p><span class="colorBlue">Birth Year:</span> ${response.birth_year}</p>
        <p><span class="colorBlue">Gender:</span> ${response.gender}</p>
        `;
        container.append(charactersInfo);
    })
}
function getActiveCharacters() {
    document.getElementById('characters').classList.remove('hidden');
}

function getHiddenLoader(button) {
    loader.classList.remove('active');
}

let currentPage = 1;
async function getPlanets(currentPage) {
    const res = await axios.get(BASE_URL + `/planets/?page=${currentPage}`);
    console.log(res.data.results);
    return res.data.results;
}

function renderPlanets(planets) {
    let container = document.querySelector('.planets');
    container.innerHTML = '';
    planets.forEach(response => {
        let planetDivEl = document.createElement('div');
        planetDivEl.classList = 'planetsInfo';
        planetDivEl.innerHTML = `
        <p><span class="colorBlue">Name:</span> ${response.name}</p>
        `;
        container.append(planetDivEl);
    })
    
}

// Buttons listeners
const homeButton = document.querySelector('.logoButton').addEventListener('click', () => {
    document.querySelector('.container').classList.add('hidden');
    document.querySelector('.getInfoButton').classList.remove('hidden');


})
const getInfoButton = document.getElementById('getInfo').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('hidden');
    document.getElementById('filmsButtons').classList.remove('hidden');
    document.querySelector('.planetsBtn').classList.remove('hidden');
    document.querySelector('.getInfoButton').classList.add('hidden');
    document.getElementById('wrapper').classList.add('hidden');

    
});
const loader = document.getElementById('loader');
const filmI = document.getElementById('filmI').addEventListener('click', () => getCharacterFromAPI(1).then(renderCharacters).finally(() => {
    document.getElementById('planets').classList.add('hidden');
    document.getElementById('wrapper').classList.remove('hidden');
    prev.classList.add('hidden');
    next.classList.add('hidden');
    getHiddenLoader();
    getActiveCharacters();
}));
const filmII = document.getElementById('filmII').addEventListener('click', () => getCharacterFromAPI(2).then(renderCharacters).finally(() => {
    document.getElementById('planets').classList.add('hidden');
    document.getElementById('wrapper').classList.remove('hidden');
    prev.classList.add('hidden');
    next.classList.add('hidden');
    getHiddenLoader();
    getActiveCharacters();
}));
const filmIII = document.getElementById('filmIII').addEventListener('click', () => getCharacterFromAPI(3).then(renderCharacters).finally(() => {
    document.getElementById('planets').classList.add('hidden');
    document.getElementById('wrapper').classList.remove('hidden');
    prev.classList.add('hidden');
    next.classList.add('hidden');
    getHiddenLoader();
    getActiveCharacters();
}));
const filmIV = document.getElementById('filmIV').addEventListener('click', () => getCharacterFromAPI(4).then(renderCharacters).finally(() => {
    document.getElementById('planets').classList.add('hidden');
    document.getElementById('wrapper').classList.remove('hidden');
    prev.classList.add('hidden');
    next.classList.add('hidden');
    getHiddenLoader();
    getActiveCharacters();
}));
const filmV = document.getElementById('filmV').addEventListener('click', () => getCharacterFromAPI(5).then(renderCharacters).finally(() => {
    document.getElementById('planets').classList.add('hidden');
    document.getElementById('wrapper').classList.remove('hidden');
    prev.classList.add('hidden');
    next.classList.add('hidden');
    getHiddenLoader();
    getActiveCharacters();
}));
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
const next = document.getElementById('next');
prev.addEventListener('click', function() {
    loader.classList.add('active');
    if (currentPage != 1) {
        currentPage--;
        getPlanets(currentPage).then(renderPlanets).finally(getHiddenLoader);
    }
});

next.addEventListener('click', function() {
    loader.classList.add('active');
if (currentPage != 6) {
    currentPage++;
    getPlanets(currentPage).then(renderPlanets).finally(getHiddenLoader);
}
});




//     'https://swapi.co/api/people/1/': './img/luke.webp',
//     'https://swapi.co/api/people/2/': './img/C-3PO.webp',
//     'https://swapi.co/api/people/3/': './img/R2-D2.webp',
//     'https://swapi.co/api/people/4/': './img/Darth-Vader.webp',
//     'https://swapi.co/api/people/5/': './img/Leia-Organa.webp',
//     'https://swapi.co/api/people/10/': './img/Obi-Wan-Kenobi.webp',
//     'https://swapi.co/api/people/13/': './img/Chewbacca.webp',
//     'https://swapi.co/api/people/14/': './img/Han-Solo.webp',
//     'https://swapi.co/api/people/16/': './img/Jabba.webp',
//     'https://swapi.co/api/people/18/': './img/Wedge-Antilles.webp',
//     'https://swapi.co/api/people/20/': './img/Yoda.webp',
//     'https://swapi.co/api/people/21/': './img/Palpatine.webp',
//     'https://swapi.co/api/people/22/': './img/Boba-Fett.webp',
    //     'https://swapi.co/api/people/23/': './img/IG-88.webp',
    //     'https://swapi.co/api/people/24/': './img/Bossk.webp',
    // }