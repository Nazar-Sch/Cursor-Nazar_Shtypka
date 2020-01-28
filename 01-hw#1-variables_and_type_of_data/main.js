let laptopHp = 15.678;
let laptopApple = 123.965;
let laptopLenovo = 90.2345;
console.log(`Laptop HP: ` + laptopHp);
console.log(`Laptop Apple: ` + laptopApple);
console.log(`Laptop Lenovo: ` + laptopLenovo);

console.log(`Max Price: ` + Math.max(laptopHp, laptopApple, laptopLenovo));

console.log(`Min price: ` + Math.min(laptopHp, laptopApple, laptopLenovo));

let laptopSum = (laptopHp + laptopApple + laptopLenovo);
console.log(`Sum of laptops: ` + laptopSum);

let laptopMathSum = (Math.floor(laptopHp) + Math.floor(laptopApple) + Math.floor(laptopLenovo));
console.log(`Sum of laptops (floor): ` + laptopMathSum);

// Выведите сумму товаров округленную до сотен. (Например если получилось 260, то выведите 300)
let laptopToHundret = laptopSum / 100;
laptopToHundret = Math.ceil(laptopToHundret);
console.log(`Sum of laptops (*100): ` + (laptopToHundret * 100));

console.log(`Multiplicity of laptop sum is: ` + (!!(Math.floor(laptopSum) % 2) == 0));

let sumCustomerMoney = 500 - laptopSum;
console.log(`Customer Money: ` + sumCustomerMoney);

let averageValue = laptopSum / 3 ;
averageValue = averageValue.toFixed(2);
console.log(`Average value of price: ` + averageValue);

let sale = Math.random();
console.log(`Sale: ` + (sale.toFixed(2) * 100) + `%`);








