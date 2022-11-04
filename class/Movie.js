class Movie {
  constructor(name, year, director, budget, income) {
    this.name = name;
    this.year = year;
    this.director = director;
    this.budget = budget;
    this.income = income;
  }

  getIntroducion() {
    return `Movie ${this.name}, ${this.year}, director ${this.director} `;
  }

  getProfit() {
    // is pajamu atimti biudzeta
    const profit = this.income - this.budget;
    return profit;
  }
}

const avatar = new Movie('Avatar', 2009, 'James Cameron', 237e6, 2.802e9);
console.log('avatar.getProfit() ===', avatar.getProfit().toExponential(2));
console.log('avatar.getIntroducion() ===', avatar.getIntroducion());
// console.log('avatar ===', avatar);
