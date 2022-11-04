class Employee {
  constructor(argName, argLastName, argHourlyPay) {
    this.firsName = argName;
    this.lastName = argLastName;
    this.hourlyPay = argHourlyPay;
    // darbo valandoms apskaityti reiksme
    this.hoursWorked = 0;
  }
}

const em1 = new Employee('James', 'Bond', 10);
console.log('em1 ===', em1);
