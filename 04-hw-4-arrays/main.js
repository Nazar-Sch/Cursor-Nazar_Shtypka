const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];


const getPairOfStudents = students => {
   return [ [students[0], students[2]], [students[1], students[3]], [students[4], students[5]] ];
}
const pair = getPairOfStudents(students);
console.log(pair);

const getPairsThemes = function(pair, themes) {
    let pairsThemes = [];
    for(let i = 0; i < pair.length; i++) {
        pairsThemes.push([pair[i].join(' і '), themes[i]]);
    }
    return pairsThemes;
}
const th = getPairsThemes(pair, themes);
console.log(th);

