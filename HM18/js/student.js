
class Student {
    constructor(firstName, lastName, birthYear, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25).fill(undefined);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }

    present() {
        const index = this.attendance.indexOf(undefined);
        if (index !== -1) {
            this.attendance[index] = true;
        }
    }

    absent() {
        const index = this.attendance.indexOf(undefined);
        if (index !== -1) {
            this.attendance[index] = false;
        }
    }

    getAttendancePercentage() {
        const presentCount = this.attendance.filter(status => status === true).length;
        return presentCount / this.attendance.length;
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendancePercentage = this.getAttendancePercentage();

        if (averageGrade > 90 && attendancePercentage > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendancePercentage > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

export default Student;