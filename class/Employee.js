class Employee {
  constructor(argName, argLastName, argHourlyPay) {
    this.firsName = argName;
    this.lastName = argLastName;
    this.hourlyPay = argHourlyPay;
    // darbo valandoms apskaityti reiksme
    this.hoursWorked = 0;
  }

  work(howManyHours) {
    console.log(`${this.firsName} worked for ${howManyHours} hours`);
    this.hoursWorked += howManyHours;
  }
}

const em1 = new Employee('James', 'Bond', 10);
console.log('em1 ===', em1);
em1.work(10);
em1.work(50);
console.log('em1.hoursWorked ===', em1.hoursWorked);
