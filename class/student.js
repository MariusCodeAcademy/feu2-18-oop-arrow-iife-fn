'use strict';
console.log('student.js');
class Student {
  // constructor vyksta sukuriant nauja objekta su new
  constructor(argName, argYear, argHomeTown) {
    console.log('student created');
    this.name = argName;
    this.year = argYear;
    this.town = argHomeTown;
    this.printStudent();
    this.courses = ['english'];
  }

  sayHi() {
    // sudentas iskonsolina ir pasisako apie save.
    /// sveiki as James is London ir esu 2 kurse
    const helloString = `Sveiki as ${this.name} is ${this.town} ir esu ${this.year} kurse`;
    console.log(helloString);
    return helloString;
  }

  printStudent() {
    const liEl = document.createElement('li');
    liEl.textContent = this.sayHi();
    studsEl.append(liEl);
  }

  addCourse(subject) {
    this.courses.push(subject);
    console.log(subject, 'was added to', this.name);
  }

  // removeCourse() -
  // pasitikrinti ar yra toks dalykas kursuose
  // jei yra pasalinam ir pransam su console
  // jei nera pranesam kad tokio nera
}

const studsEl = document.getElementById('studs');

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
