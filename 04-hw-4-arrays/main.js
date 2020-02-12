const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

function getRandomMarks(marks) {
    const randomMarksArr = [];
    for(let i = 0; i <= marks.length; i++) {
        randomMarksArr.push(marks[Math.trunc(Math.random() * marks.length)]);
    }
    return randomMarksArr;
}
const randomMarks = getRandomMarks(marks);

// Task #1
const getPairOfStudents = students => {
   return [ [students[0], students[2]], [students[1], students[3]], [students[4], students[5]] ];
}
const pair = getPairOfStudents(students);
console.log(pair);

// Task #2
const getPairsThemes = (pair, themes) => {
    const pairsThemesArr = [];
    for(let i = 0; i < pair.length; i++) {
        pairsThemesArr.push([pair[i].join(' і '), themes[i]]);
    }
    return pairsThemesArr;
}
const pairsThemes = getPairsThemes(pair, themes);
console.log(pairsThemes);

// Task #3
const getStudentsMarks = (students, marks) => {
    const studentsMarksArr = [];
    for(let i = 0; i < students.length; i++) {
        studentsMarksArr.push([students[i], marks[i]]);
    }
    return studentsMarksArr;
}
const studentsMarks = getStudentsMarks(students, marks);
console.log(studentsMarks);

// Task #4
const getPairsMarks = (pairsThemes, randomMarks) => {
    const pairsMarksArr = [];
    for(let i = 0; i < pairsThemes.length; i++) {
        pairsMarksArr.push([...pairsThemes[i], randomMarks[i]]);
    }
    return pairsMarksArr;
}
const pairsMarks = getPairsMarks(pairsThemes, randomMarks);
console.log(pairsMarks);



