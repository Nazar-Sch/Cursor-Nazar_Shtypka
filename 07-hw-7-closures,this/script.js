const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


// Task #1
function getMyTax(salary) {
  return this.tax * salary;
}
console.log(getMyTax.call(ukraine, 1000));

// Task #2
function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}
console.log(getMiddleTaxes.call(ukraine));

// Task #3
function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}
console.log(getTotalTaxes.call(latvia));

// Task #4
function getMySalary(country) {
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    const interval = setInterval(() => {
      const salary = randomNumber(1500, 2000);
      const taxes = Math.round(getMyTax.call(country, salary));
      const profit = salary - taxes;
      console.log({salary, taxes, profit,});
    }, 10000);
    return interval;
  }
  getMySalary(ukraine);