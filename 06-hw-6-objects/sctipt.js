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
  
  let subjectArr = [];
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
console.log(getSubject(students[0]));

// Task #2
const getAverage = (...numbers) => {
  const getSum = numbers.reduce((previus, current) => Math.round(previus + current));
  const result = getSum / numbers.length;
  return result; 
};

// const getAverageMark = studentsMark => {
// let {subjects} = studentsMark;

// console.log(subjects);
// } 
// getAverageMark(students[0]);






// const getStudentsName = (student) => {
//   student = [];
//   for (let i = 0; i < students.length; i++) {
//     const {name} = students[i];
//     student.push(name);
//   }
//   console.log(student);
// }
// getStudentsName();

// const getStudentSubject = subjectArr => {
//   subjectsArr = [];
//   for (let j = 0; j < students.length; j++) {
//     for(let key in students[j]['subjects']) {
//       subjectsArr.push(key);
//     }
//   }
//   console.log(subjectsArr);
// }

// const getStudentSubject = Object.keys(student.subjects)
// console.log(getStudentSubject);








//   const getStudents = students.forEach((el) => {
//     // for(let key in el['name']) {
//     //   name.push(key);
//     // }
//     // console.log(name);
//   });

// getStudents();


  // name = students[0];
  // const subjectsArr = [];
  
  // for(let key in name['subjects']) {
  //   subjectsArr.push(key);
  // }
  // console.log(name['name'] + ' ' + subjectsArr);



// }
// getSubject();





// console.log(Object.entries(students));
// Object.entries(students).map(([name, subjects]) => console.log(name, subjects));
// console.log(Object.values(students));
// console.log(Object.values(...students));
// TASK #1
// const getSubject = (name) => {
// }
// getSubject(students);

// const user = {
//   name: 'Bogdan',
//   status: 'lector',
//   createdBy: 'iVan',
// }
// const {name, status, ...other} = user;
// // console.log(other);

// function qwe() {
//   const userName = {name, status};
//   console.log(userName);
// }
// qwe();




// const students = [{
//   name: "Tanya",
//   course: 3,
//   subjects: {
//     math: [4, 4, 3, 4],
//     algorithms: [3, 3, 3, 4, 4, 4],
//     data_science: [5, 5, 3, 4]
//   },
// }];

// const copy = Object.assign({}, students);
// console.log(copy);

