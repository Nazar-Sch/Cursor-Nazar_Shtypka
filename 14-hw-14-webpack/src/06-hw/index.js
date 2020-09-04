
export const students = [{
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

export function getSubject(studentsSubject) {
  
    const subjectArr = [];
    for(let key in studentsSubject['subjects']) {
      subjectArr.push(key);
    }
    
    const letterUp = subjectArr.map((word) => {
      word = word[0].toUpperCase() + word.slice(1);
      return word;
    });
  
    const subjectWithDelChar = letterUp.map((el) => el.split('_').join(' ') );
    return `Student subjects: ${subjectWithDelChar}`;
  }