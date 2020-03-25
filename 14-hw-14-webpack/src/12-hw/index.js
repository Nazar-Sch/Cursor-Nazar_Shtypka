import "./style.css";
// export const images = {
//     'https://swapi.co/api/people/1/': './img/luke.webp',
//     'https://swapi.co/api/people/2/': './img/c-3po.webp',
//     'https://swapi.co/api/people/3/': './img/R2-D2.webp',
//     'https://swapi.co/api/people/4/': './img/dartvader.webp',
//     'https://swapi.co/api/people/5/': './img/Leia-Organa.webp',
//     'https://swapi.co/api/people/6/': './img/OwenLars.webp',
//     'https://swapi.co/api/people/7/': './img/BeruCard.webp',
//     'https://swapi.co/api/people/8/': './img/R5d4.webp',
//     'https://swapi.co/api/people/9/': './img/BiggsHS.webp',
//     'https://swapi.co/api/people/10/': './img/Obi-Wan-Kenobi.webp',
//     'https://swapi.co/api/people/11/': './img/Tarkin.webp',
//     'https://swapi.co/api/people/12/': './img/Greedo.webp',
//     'https://swapi.co/api/people/13/': './img/chewbaca.webp',
//     'https://swapi.co/api/people/14/': './img/Han-Solo.webp',
//     'https://swapi.co/api/people/15/': './img/Porkins.webp',
//     'https://swapi.co/api/people/16/': './img/Jabba.webp',
//     'https://swapi.co/api/people/17/': './img/Porkins.webp',
//     'https://swapi.co/api/people/18/': './img/Raymus.webp',
// };

// export function getImage(url){
//     if (images[url] == undefined) {
//       return './img/starwarsicon.png';
//     } else {
//       return images[url];
//     }
// };

export default async function getCharacter() {
    const container = document.querySelector('.cotainer');
    const res = await axios.get(`https://swapi.co/api/films/1/`);
    const dataRes = res.data.characters;
    dataRes.forEach(dataRes => {
        let getChar = axios.get(dataRes).then(res => {
            const charactersInfo = document.createElement('div');
            charactersInfo.classList = 'charList';
            charactersInfo.innerHTML = `
            <p><span class="colorBlue">Name:</span> ${res.name}</p>
            <p><span class="colorBlue">Birth Year:</span> ${res.birth_year}</p>
            <p><span class="colorBlue">Gender:</span> ${res.gender}</p>
            `;
            container.append(charactersInfo);
        }
    )})
    
};

// arr.forEach(el => {
//     let newR = axios.get(el).then(newR => {
//      const infoCharacter = document.createElement('div');
//      const name = newR.data.name;
//      infoCharacter.innerHTML = `
//      <img class="photo" src="${photosOfCharacters[name]}">
//      <h3>${newR.data.name}</h3>
//      <h5>${newR.data.birth_year}</h5>
//      <p>${newR.data.gender}</p>
//      `
//      container.append(infoCharacter);
//      infoCharacter.classList.add('user')
//      });