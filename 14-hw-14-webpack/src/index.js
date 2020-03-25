// const users = require("./01-hw/index");
// console.log(users); //Transpilation in Node.js
// import  maxPrice from "./01-hw/index";
// console.log(maxPrice); //Transpilation in Browser

import  maxPrice from "./01-hw/";
import renderNum from "./02-hw/";
import deleteLetters from './03-hw/';
import getListOfStudents from './04-hw/';
import getAverage from './05-hw/';
import {students, getSubject} from './06-hw/';
import {ukraine, getMyTax} from './07-hw/';
import {Student, student} from './08-hw/';
import {parentSquare, generateBlocksInterval} from './09-hw/';
import play from './10-hw/';
import getRandomChinese from './11-hw/';
import getCharacter from './12-hw/';
import {createIdGenerator, idGenerator} from './13-hw/';

const wrapper = document.getElementById('wrapper');
function clearContent() { 
    return wrapper.innerHTML = ""; 
} 

document.querySelector('.btn-hw1').addEventListener('click', () => {
    document.getElementById('dom').style.display = "none";
    clearContent();
    document.querySelector('.container').style.display = "none";
    console.log(`HW#1 - ${maxPrice}`);
    return wrapper.innerHTML = `HW#1 - ${maxPrice}`;
});
document.querySelector('.btn-hw2').addEventListener('click', () => {
    document.getElementById('dom').style.display = "none";
    clearContent();
    document.querySelector('.container').style.display = "none";
    return wrapper.innerHTML = `HW#2 - ${renderNum()}`;
});
document.querySelector('.btn-hw3').addEventListener('click', () => {
    document.getElementById('dom').style.display = "none";
    clearContent();
    document.querySelector('.container').style.display = "none";
    console.log(`HW#3 - ${(deleteLetters())}`);
    return wrapper.innerHTML = `HW#3 - ${(deleteLetters())}`;
});
document.querySelector('.btn-hw4').addEventListener('click', () => {
    document.getElementById('dom').style.display = "none";
    clearContent();
    document.querySelector('.container').style.display = "none";
    console.log(`HW#4 - ${(getListOfStudents())}`);
    return wrapper.innerHTML = `HW#4 - ${(getListOfStudents())}`;

});
document.querySelector('.btn-hw5').addEventListener('click', () => {
    document.getElementById('dom').style.display = "none";
    clearContent();
    document.querySelector('.container').style.display = "none";
    console.log(`HW#5 - ${(getAverage())}`);
    return wrapper.innerHTML = `HW#5 - ${(getAverage())}`;

});
document.querySelector('.btn-hw6').addEventListener('click', () => {
    document.getElementById('dom').style.display = "none";
    clearContent();
    document.querySelector('.container').style.display = "none";
    console.log(`HW#6 - ${(getSubject(students[0]))}`);
    return wrapper.innerHTML = `HW#6 - ${(getSubject(students[0]))}`;

});
document.querySelector('.btn-hw7').addEventListener('click', () => {
    document.getElementById('dom').style.display = "none";
    clearContent();
    document.querySelector('.container').style.display = "none";
    console.log(`HW#7 - My tax in Ukraine is ${getMyTax.call(ukraine, 10000)}`);
    return wrapper.innerHTML = `HW#7 - My tax in Ukraine is ${getMyTax.call(ukraine, 10000)}`;
});
document.querySelector('.btn-hw8').addEventListener('click', () => {
    document.getElementById('dom').style.display = "none";
    clearContent();
    document.querySelector('.container').style.display = "none";
    console.log(`HW#8 - Student's info: ${student.getInfo()}`);
    return wrapper.innerHTML = `HW#8 - Student's info: ${student.getInfo()}`;
});
document.querySelector('.btn-hw9').addEventListener('click', () => {
    document.getElementById('dom').style.display = "flex";
    clearContent();
    document.querySelector('.container').style.display = "none";
    console.log(`HW#9 Result - Blocks are genereting!`);
    return generateBlocksInterval();
});
document.querySelector('.btn-hw10').addEventListener('click', () => {
    document.getElementById('dom').style.display = "none";
    clearContent();
    document.querySelector('.container').style.display = "none";
    console.log(`HW#10 - Sound is playing`);
    wrapper.innerHTML = `HW#10 - Result: Sound is playing`;
    return play();
});
document.querySelector('.btn-hw11').addEventListener('click', () => {
    document.getElementById('dom').style.display = "none";
    clearContent();
    document.querySelector('.container').style.display = "none";
    return getRandomChinese(2).then(letters => {
        console.log(`HW11 Result - Chenese letters: ${letters}`);
        wrapper.innerHTML = `HW11 Result - Chenese letters: ${letters}`;
    });
});
document.querySelector('.btn-hw12').addEventListener('click', () => {
    document.getElementById('dom').style.display = "none";
    clearContent();
    document.querySelector('.container').style.display = "flex";
    console.log(`HW12 Result - Cherecters rendered`);
    return getCharacter(2).then(res => res);
});
document.querySelector('.btn-hw13').addEventListener('click', () => {
    document.getElementById('dom').style.display = "none";
    clearContent();
    document.querySelector('.container').style.display = "none";
    return wrapper.innerHTML = `HW#13 - Value: ${idGenerator.next().value}`;
});


