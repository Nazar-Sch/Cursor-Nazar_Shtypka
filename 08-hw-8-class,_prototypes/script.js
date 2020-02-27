class Student {
    constructor(univercity, course, fullName) {
        this.univercity = univercity;
        this.course = course;
        this.fullName = fullName;
        this.getInfo = () => `${this.course} ${this.univercity} ${this.fullName}`;
    }
    // getInfo() {
    //     return `${this.course} ${this.univercity} ${this.fullName}`
    // }

    get marks() {
        const studentsMarks = []
        return studentsMarks;
    }

    set marks(value) {
        studentsMarks.push(value);
    }

    getAverageMark(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    
}

