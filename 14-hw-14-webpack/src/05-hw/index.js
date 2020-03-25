export default function getAverage(...numbers) {
    numbers = [55, 77, 57, 3, 2];
    const getSum = numbers.reduce((previus, current) => Math.round(previus + current));
    const result = getSum / numbers.length;
    return `Average of (${numbers}): ${result}`;
}