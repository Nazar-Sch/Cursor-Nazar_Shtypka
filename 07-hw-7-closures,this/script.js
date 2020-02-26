const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


// Task #1
function getMyTax(salary) {
  return this.tax * salary;
}
console.log(getMyTax.call(ukraine, 1000));

// Task #2
function getMiddleTaxes(country) {
  return this.tax * this.middleSalary;
}
console.log(getMiddleTaxes.call(ukraine));

// Task #3
function getTotalTaxes(country) {
  return this.tax * this.middleSalary * this.vacancies;
}
console.log(getTotalTaxes.call(latvia));

// Task #4
function getMySalary(country) {
    function randomNumber(max, min) {
      max = 2000;
      min = 1500;
        return Math.floor(Math.random() * (max - min) + min);
    };
    const salary = randomNumber();
    const taxes = Math.round(getMyTax.call(country, salary));
    const profit = salary - taxes;
    const mySalaryObj = {
        salary,
        taxes,
        profit,
    };
    return mySalaryObj;
  }
  
  // setInterval(() => {
  //   console.log(getMySalary(ukraine))
  // }, 10000);
  console.log(getMySalary(ukraine));