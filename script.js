
const cars = [
    "Saab",
    "Lancia",
    "BMW"
];
document.getElementById("demo").innerHTML = cars;

const car = [
    "Saab",
    "Lancia",
    "BMW"
];
document.getElementById("demo-2").innerHTML =car[0];

const fruitsOne = [
    "Banana",
    "Orange",
    "Apple"];
document.getElementById("demo-9").innerHTML =
    fruitsOne instanceof Array;

const fruits = [
    "Banana",
    "Oranges",
    "Apple"
];
document.getElementById("demo-3").innerHTML = fruits;
fruits[0] =  "Kiwi";
document.getElementById("demo-4").innerHTML = fruits;

const fruit = [
    "Banana",
    "Oranges",
    "Apple",
    "Mango"
];
document.getElementById("demo-5").innerHTML =
    fruit.length;

const myFruits = [
    "Banana",
    "Oranges",
    "Mango",
    "Apple"
];
let myFruitsLength = myFruits.length;
let text = "<ul>";
for(let i = 0; i <myFruitsLength; i++ ){
    text += "<li>" + myFruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo-6").innerHTML = text;
const verdura = [
    "Banana",
    "Apple",
    "Mango",
    "kiwi"
];
document.getElementById("demo-7").innerHTML =
    verdura;

function myFunction(){
    verdura[verdura.length] = "lemon";
    document.getElementById("demo-7").innerHTML =verdura;
}
const verdura2 = [
    "Banana",
    "Apple",
    "Mango",
    "Kiwi"
];
verdura2[6] = "lemon";
let vlength = verdura2.length;
let text2 = "";
for(let i = 0; i < vlength; i++ ){
    text2 += vlength[i] + "<br>";
}
document.getElementById("demo-8").innerHTML =
    text2;


const fruits5 = ["Banana", "Orange", "Apple"];
document.getElementById("demo-9").innerHTML = fruits5 instanceof Array;