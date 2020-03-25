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
function clearDom() { 
    return document.getElementById('dom').style.display = "none";
} 
function addDom() { 
    return document.getElementById('dom').style.display = "flex";
} 


document.querySelector('.btn-hw1').addEventListener('click', () => {
    clearDom();
    clearContent();
    console.log(`HW#1 - ${maxPrice}`);
    return wrapper.innerHTML = `HW#1 - ${maxPrice}`;
});
document.querySelector('.btn-hw2').addEventListener('click', () => {
    clearDom();
    clearContent();
    return wrapper.innerHTML = `HW#2 - ${renderNum()}`;
});
document.querySelector('.btn-hw3').addEventListener('click', () => {
    clearDom();
    clearContent();
    console.log(`HW#3 - ${(deleteLetters())}`);
    return wrapper.innerHTML = `HW#3 - ${(deleteLetters())}`;
});
document.querySelector('.btn-hw4').addEventListener('click', () => {
    clearDom();
    clearContent();
    console.log(`HW#4 - ${(getListOfStudents())}`);
    return wrapper.innerHTML = `HW#4 - ${(getListOfStudents())}`;

});
document.querySelector('.btn-hw5').addEventListener('click', () => {
    clearDom();
    clearContent();
    console.log(`HW#5 - ${(getAverage())}`);
    return wrapper.innerHTML = `HW#5 - ${(getAverage())}`;

});
document.querySelector('.btn-hw6').addEventListener('click', () => {
    clearDom();
    clearContent();
    console.log(`HW#6 - ${(getSubject(students[0]))}`);
    return wrapper.innerHTML = `HW#6 - ${(getSubject(students[0]))}`;

});
document.querySelector('.btn-hw7').addEventListener('click', () => {
    clearDom();
    clearContent();
    console.log(`HW#7 - My tax in Ukraine is ${getMyTax.call(ukraine, 10000)}`);
    return wrapper.innerHTML = `HW#7 - My tax in Ukraine is ${getMyTax.call(ukraine, 10000)}`;
});
document.querySelector('.btn-hw8').addEventListener('click', () => {
    clearDom();
    clearContent();
    console.log(`HW#8 - Student's info: ${student.getInfo()}`);
    return wrapper.innerHTML = `HW#8 - Student's info: ${student.getInfo()}`;
});
document.querySelector('.btn-hw9').addEventListener('click', () => {
    addDom();
    clearContent();
    return generateBlocksInterval();
});
document.querySelector('.btn-hw10').addEventListener('click', () => {
    clearDom();
    clearContent();
    wrapper.innerHTML = `HW#10 - Sound is playing`;
    return play();
});
document.querySelector('.btn-hw11').addEventListener('click', () => {
    clearDom();
    clearContent();
    console.log(`HW#11 - Chinese letters: ${getRandomChinese()}`);
    return wrapper.innerHTML = `HW#11 - Random Chinese letter: ${getRandomChinese()}`;
});
document.querySelector('.btn-hw12').addEventListener('click', () => {
    clearDom();
    clearContent();
    return wrapper.innerHTML = `HW#12 - Starwars characters: ${getCharacter(7)}`;
});
document.querySelector('.btn-hw13').addEventListener('click', () => {
    clearDom();
    clearContent();
    return wrapper.innerHTML = `HW#13 - Value: ${idGenerator.next().value}`;
});


