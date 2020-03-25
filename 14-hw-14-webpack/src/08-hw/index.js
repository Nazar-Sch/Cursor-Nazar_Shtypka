export class Student {
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
export const student = new Student(`Національний Університет 'Львівська політехніка'`, `1 курс`, `Назар Назарович`);
