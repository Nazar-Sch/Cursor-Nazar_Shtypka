let hp = 15.678;
let apple = 123.965;
let asus = 90.2345;
console.log(`hp price: ` + hp);
console.log(`apple price: ` + apple);
console.log(`asus price: ` + asus);

let ware = [`hp`, `apple`, `asus`];

let maxPrice = Math.max(hp, apple, asus);
console.log(`Max Price: ` + maxPrice);

let minPrice = Math.min(hp, apple, asus);
console.log(`Min price: ` + minPrice);

let wareSum = (hp + apple + asus);
console.log(`Sum of wares: ` + wareSum);

let wareMathSum = (Math.floor(hp) + Math.floor(apple) + Math.floor(asus));
console.log(`Sum of wares (floor): ` + wareMathSum);

let wareSumtoHundret = wareSum / 100;
wareSumtoHundret = Math.ceil(wareSumtoHundret) * 100;
console.log(`Sum of wares (*100): ` + (wareSumtoHundret));

var multiplicity = !!(Math.floor(wareSum) % 2) == 0;
console.log(`Multiplicity of ware sum is: ` + multiplicity);

let sumCustomerMoney = 500 - wareSum;
console.log(`Customer Money: ` + sumCustomerMoney);

let averageValue = wareSum / ware.length;
averageValue = averageValue.toFixed(2);
console.log(`Average value of price: ` + averageValue);

let sale = Math.random();
console.log(`Sale: ` + (sale.toFixed(2) * 100) + `%`);

let priceSaleHp = hp * sale;
priceSaleHp = hp - priceSaleHp;
priceSaleHp = priceSaleHp.toFixed(2);
console.log(`hp - price with random sale: ` + Math.abs(priceSaleHp));

let priceSaleApple = apple * sale;
priceSaleApple = apple - priceSaleApple;
priceSaleApple = priceSaleApple.toFixed(2);
console.log(`apple - price with random sale: ` + priceSaleApple);

let priceSaleAsus = asus * sale;
priceSaleAsus = asus - priceSaleAsus;
priceSaleAsus = priceSaleAsus.toFixed(2);
console.log(`asus price with random sale: ` + priceSaleAsus);

let costHp = (hp / 2) - priceSaleHp;
console.log(`Lost profit hp: ` + costHp);
let costApple = (apple /2) - priceSaleApple;
console.log(`Lost profit apple: ` + costApple);
let costAsus = (asus / 2) - priceSaleAsus;
console.log(`Lost profit asus: ` + costAsus);

console.log(`
Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Сума цін: ${wareSum}
Сума заокруглена в меншу сторону: ${wareMathSum}
Сума заокруглена до сотні: ${wareSumtoHundret}
Парність числа: ${multiplicity}
Сума здачі з 500 грн: ${sumCustomerMoney}
Середнє значення: ${averageValue}
Знижка: ${sale}
Ціна зі знижкою hp: ${priceSaleHp}
Ціна зі знижкою apple: ${priceSaleApple}
Ціна зі знижкою asus: ${priceSaleAsus}
Упущена вигода hp: ${costHp}
Упущена вигода apple: ${costApple}
Упущена вигода asus: ${costAsus}
`);