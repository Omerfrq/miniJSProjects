let teacher = require('./teacher.json');
console.log(teacher.length);
let Faculty = {
    Doctors: 0,
    Male: 0,
    Female: 0
};

for (let i = 0; i < teacher.length; i++) {
    if (teacher[i].Name.match('Dr.')) {
        Faculty.Doctors = Faculty.Doctors + 1;
    } else if (teacher[i].Name.match('Ms.')) {
        Faculty.Female += 1;
    } else if (teacher[i].Name.match('Mr.')) {
        Faculty.Male += 1;
    }
}

console.log(Faculty);
