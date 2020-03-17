const BASE_URL = 'https://swapi.co/api';

const filmI = document.getElementById('filmI');
const filmII = document.getElementById('filmII');
const filmIII = document.getElementById('filmIII');
const filmIV = document.getElementById('filmIV');
const filmV = document.getElementById('filmV');

filmI.addEventListener('click', function() {
    return getCharacter(1).then(renderCharacters); 
});

async function getCharacter(film) {
    const res = await axios.get(BASE_URL + `/films/${film}/`);
    console.log(res.data.characters);

    return res.data.characters.map((el) => {
        const promiseAx = axios.get(el).then((char) => char.data);
        console.log(promiseAx);
        return promiseAx;
    });
}
function renderCharacters(characters) {
    // innerHTML = '';
    const container = document.querySelector('.characters');
    console.log(container);
    characters.forEach(character => {
        const divEl = document.createElement('div');
        divEl.classList = 'charList';
        divEl.innerHTML = `
        <h4>Name: ${character.name}</h4>
        <h5>Birth Year: ${character.birth_year}</h5>
        <h5>Gender: ${character.gender}</h5>
        `;
        container.append(divEl);
    })
}

// getCharacter().then(renderCharacters);


