const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


// Task #1
const getMyTax = function(salary) {
  return this.tax * salary;
}
const myTax = getMyTax.call(ukraine, 10000);
console.log(myTax);

// Task #2
const getMiddleTaxes = function(country) {
  return this.tax * this.middleSalary;
}
const middleTaxes = getMiddleTaxes.call(ukraine);
console.log(middleTaxes);

// Task #3
const getTotalTaxes = function(country) {
  return this.tax * this.middleSalary * this.vacancies;
}
const totalTaxes = getTotalTaxes.call(ukraine);
console.log(totalTaxes);

// Task #4
const getMySalary = function(country) {
    function randomNumber(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    const salary = randomNumber(2000, 1500);
    const tax = getMyTax.call(country, salary);
    const profit = salary - tax;
    const mySalaryObj = {
        salary,
        tax,
        profit,
    };
    return mySalaryObj;
}
console.log(getMySalary(ukraine));