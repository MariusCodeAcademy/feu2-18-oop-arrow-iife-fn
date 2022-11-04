'use strict';
console.log('main.js');

const st1 = new Student('James', 2, 'Lodon');
// sukurti metoda addCourse() kuris prides viena kursa pries studento esamu
st1.addCourse('Math');
// st1.removeCourse('Gymnastics');

const st2 = new Student('Jane', 3, 'NY');
st2.addCourse('Gymnastics');
// st1.printStudent();
// st2.printStudent();
st1.sayHi();
// const st2 = new Student();
console.log('st1 ===', st1);
// console.log('st2 ===', st2);
