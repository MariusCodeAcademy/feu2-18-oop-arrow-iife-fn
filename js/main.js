'use strict';
console.log('main.js');

const st1 = new Student('James', 2, 'Lodon');
console.log('st1 ===', st1);
const math1 = new Subject('Math', [5, 6, 7]);

st1.addCourse(math1);
console.log('st1.courses[1].avg() ===', st1.courses[1].avg());

// console.log('math1 ===', math1);
// console.log('math1.avg() ===', math1.avg());
