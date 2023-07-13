
import Student from "./student.js";

const student1 = new Student("Василь", "Петров", 1999, [90, 85, 95, 80]);
student1.present();
student1.present();
student1.absent();

console.log(`${student1.firstName} ${student1.lastName}:`);
console.log(`Вік: ${student1.getAge()}`);
console.log(`Середня оцінка: ${student1.getAverageGrade()}`);
console.log(`Відсоток відвідуваності: ${student1.getAttendancePercentage()}`);
console.log(`Резюме: ${student1.summary()}`);

const student2 = new Student("Олексій", "Іванов", 2002, [90, 95, 90, 95]);

for (let i = 0; i < 25; i++) {
    student2.present();
}

console.log(`${student2.firstName} ${student2.lastName}:`);
console.log(`Вік: ${student2.getAge()}`);
console.log(`Середня оцінка: ${student2.getAverageGrade()}`);
console.log(`Відсоток відвідуваності: ${student2.getAttendancePercentage()}`);
console.log(`Резюме: ${student2.summary()}`);