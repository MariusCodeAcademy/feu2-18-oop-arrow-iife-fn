class Student {
  // constructor vyksta sukuriant nauja objekta su new
  constructor(argName, argYear, argHomeTown) {
    console.log('student created');
    this.studList = document.getElementById('studs');
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
    this.studList.append(liEl);
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
