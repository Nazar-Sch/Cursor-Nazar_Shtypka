import "./style.css";
export default async function getCharater() {
    let container = document.querySelector('.container');
    const res = await axios.get(`https://swapi.co/api/films/1/`);
    return res.data.characters.forEach(dataRes => {
        axios.get(dataRes).then(res => {
            const charInfo = document.createElement('div');
            charInfo.classList.add('charList');
            charInfo.innerHTML = `
            <p><span class="colorBlue">Name:</span> ${res.data.name}</p>
            <p><span class="colorBlue">Birth Year:</span> ${res.data.birth_year}</p>
            <p><span class="colorBlue">Gender:</span> ${res.data.gender}</p>
             `;
            container.append(charInfo);
        })
    })

}
