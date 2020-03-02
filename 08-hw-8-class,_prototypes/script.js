// HW#8 (!) Homework should be submitted as a page on GITPAGES.
// 1. Students must have the following properties: university, course, fullName, they are passed when creating a student 
// (in the constructor).
// 2. Create this.getInfo () method -> "Odesa Higher Fraud High School 1st year student, Ostap Rodomanskiy Bender", 
// the method returns the aggregate information about the course, the institution and the student's name.
// 3. Create a getter of this.marks, which returns an array of student grades [5, 4, 4, 5].
// 4. Create an assessment setter this.marks = 5 that allows you to grade the student. 
// After the evaluation is made, the getter must return this.marks -> array [5, 4, 4, 5, 5].
// 5. Create a method to get this.getAverageMark () -> 4.6 grade point average.Create
// 6. Create this.dismiss method that will "exclude" the student. After calling this method - it is impossible to put 
// the student grades and to receive them any more. (No errors, just always returns null instead of array of estimates).
// 7. Create this.recover method that will allow you to recover the student.


class Student {
    constructor(univercity, course, fullName) {
        this.univercity = univercity;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5,4,4,5];
        this.dismiss = false;
    }
    getInfo() {
        return `${this.course} ${this.univercity} ${this.fullName}`;
    }
    get studentsMarks() {
        if (this.dismiss) {
            return null;
        }
        return this.marks;
    }
    set studentsMarks(value) {
        if (this.dismiss) {
            return null;
        }
        return this.marks.push(value);
    }
    getAverageMark() {
        return this.marks.reduce((acc, val) => (acc + val), 0) / this.marks.length;
    }
    getDismissStudent() {
        return this.dismiss = true;;   
    }
    getRecoverStudent() {
        return this.dismiss = false;;
    }
    
}
const student = new Student(`Національний Університет 'Львівська політехніка'`, `1 курс`, `Назар Назарович`);

// Get info
console.log(`Student's info: ${student.getInfo()}`);
document.writeln(`<hr> Student's info: ${student.getInfo()} <hr>`);

// Get students marks
console.log(`Student's marks: ${student.marks}`);
document.writeln(`<hr> Student's marks: ${student.marks} <hr>`);

// Add new mark
student.studentsMarks = 5;
console.log(`Students marks: ${student.marks}`);
document.writeln(`<hr> Student's marks: ${student.marks} <hr>`);

// Get average mark
console.log(`Student's average mark: ${student.getAverageMark()}`);
document.writeln(`<hr> Student's average mark: ${student.getAverageMark()} <hr>`);

// Get dismiss student
console.log(student.getDismissStudent());

// Get recover student
console.log(student.getRecoverStudent());


// Advanced 
class BudgetStudent extends Student {
    constructor(univercity, course, fullName) {
        super(univercity, course, fullName);
        setInterval(() => {
            console.log(this.getScolarship());
        }, 30000);
        this.studMarks =  [5, 4, 5, 4];
        this.isDismiss = false; 
    }
    getScolarship() {
        if(this.dismiss === false && this.getAverageMark() >= 4.0) {
            return 'Студент отримав стипендію у розмірі 1400 грн!';
        } else {
            return 'Студент не отримав стипендію';
        }
    }
}
const budget = new BudgetStudent(`Національний Університет 'Львівська політехніка'`, `1 курс`, `Сан Педро`);
console.log(budget.getInfo());
document.writeln(budget.getScolarship());
