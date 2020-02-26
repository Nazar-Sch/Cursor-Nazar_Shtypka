const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];


// Task #1
const getSubject = studentsSubject => {
  
  const subjectArr = [];
  for(let key in studentsSubject['subjects']) {
    subjectArr.push(key);
  }
  
  const letterUp = subjectArr.map((word) => {
    word = word[0].toUpperCase() + word.slice(1);
    return word;
  });

  const subjectWithDelChar = letterUp.map((el) => el.split('_').join(' ') );
  return subjectWithDelChar;
}
console.log(getSubject(students[0])); //["Math", "Algorithms", "Data science"]

// Task #2
const getAverageMark = studentsMarks  => {
    const {subjects} = studentsMarks;
    const marks = Object.values(subjects);
    const marksArr = [].concat(...marks);
    const result = (marksArr.reduce((previus, current) =>  current + previus)) / marksArr.length;
    return result.toFixed(2);
  } 
console.log(`Student's average mark is: ${getAverageMark(students[0])}`);

// Task #3
const getStudentsInfo = student => {
  const {course, name} = student;
  const infObj = {
    course,
    name,
    averageMark: getAverageMark(student),
  }
  return infObj;
}
console.log(getStudentsInfo(students[0]));

// Task #4
const getStudentsNames = (sortedNames) => {
  const namesArr = [];
  students.map((student) => {
    const {name} = student;
    namesArr.push(name);
  });
  return sortedNames = namesArr.sort();
}
console.log(getStudentsNames());

// Task #5
const getBestStudents = (students) => {
  return students.reduce((previus, current) => getAverageMark(current) > getAverageMark(previus) ? current : previus).name;
}
console.log(getBestStudents(students));


// Task #6
const calculateWordLetters = (str) => {
  const letter = {};
  for(let i = 0; i <= str.length; i++) {
    const char = str[i];
    if(!letter[char]) {
      letter[char] = 0;
    }
    letter[char]++;
  }
  return letter;
}
console.log(calculateWordLetters('Programming'));
