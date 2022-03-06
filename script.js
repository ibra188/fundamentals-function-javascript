
const num = 3;
function multiplyBy2(inputNumber){
    const result = inputNumber*2;
    return result;
}

const out = multiplyBy2(num);
const newoutput = multiplyBy2(10);

console.log('out')

function tenSquared(){
    return 10*10;
}

tenSquared()//100

//Drey principles
function squareNum(num){
    return num*num;
}
squareNum(10);//100
squareNum(9)//81
squareNum(8)//64

function copyArrayAndMultiplyBy2(array){
    const output =[];
    for(let i = 0; i < array.length; i++){
        output.push(array[i] * 2);
    }
    return output;
}

const myArray = [1,2,3];
const result = copyArrayMultipleBy2(myArray);

//Array function
function multiplyBy2(input){return input * 2;}

const multiplyBy2 = (input) => {return input*2}

const multiplyBy2 = (input) => input*2

const copyArrayMultipleBy2 = input => input*2

//closure
 
function creteFunction(){
    function multiplyBy2(num){
        return num*2;
    }
    return multiplyBy2;
}
const generatedFunc = createFunction();
const result2 = generatedFunc(3);

/*function createFunction(){
    function multiplyBy2(num){
        return num*2;
    }
    return multiplyBy2;
}

const generatedFunc = createFunction();
const result = generatedFunc(3); */


//Calling a function in the same function call as it was defined
function out(){
    let counter = 0;
    function incrementCounter(){
        counter ++;
    }
    incrementCounter();
}

outer();

//calling a function outside of the function call in which it was defined
function outer (){
    let counter = 0;
    function incrementCounter(){counter ++}
    return incrementCounter;

}
const myNewFunction = outer();
myNewFunction();
myNewFunction();

//introuction callback functions and web browser
function printHello(){console.log("Hello");}
setTimeout(printHello, 1000);
console.log("Me first!");

/*we are interacting with a qorld outside of javascript
 now so we need rules */
 function printHello(){console.log("Hello");}
 function blockFor1Sec(){/*block the javascript thread for 1 sec*/}

 setTimeout(printHello,0);

 blockFor1Sec()
 console.log("Me first");

 //ES6 Promises
function display(data){
    console.log(data)
}

const futureData = fetch('https://twitter.com')
futureData.then(display);

console.log("Me first");


function display(data){console.log(data)}
function printHello(){console.log("Hello");}
function blockFor300ms(){/* blocks js threat for 300} ms */}

setTimeout(printHello, 0);

const futureData1 = fetch('https://twitter.com/will/tweets/1')

futureData1.then(display)

blockFor300ms()
console.log("Me first");

//Class and  prptotypes
const user1 = {
    name: "will",
    score: 3,
    increment: function(){user1.score;}
};

user1.increment();// user1.score -> 4

//dot notaion
const user2 = {};// create a empty object

//assign property to that object
user2.name = "Tim";
user2.score = 6;
user2.increment = function(){
    user2.score++;
};

//creating user3 using object.create
const user3 = object.create(null);

user3.name = "eva";
user3.score = 9;
user3.increment = function(){
    user3.score++;
};

//solution1. Generate object using a function
function userCreator(name, score){
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function(){
        newUser.score++;
    };
    return newUser;
};

const user4 = userCreator("will", 3);
const user5 = userCreator("Tim", 5);
user4.increment();


//using the prototype change
function userCreator2  (name1, score1){
   const newUser1 = Object.create(userFunctionStore);
   newUser1.name1 = name1;
   newUser1.score1 =  score1;
   return newUser1;
};

const userFunctionStore = {
    increment: function(){this.score1++;},
    login: function(){console.log("Logged in");}
};

const user6 = userCreator3("will", 3);
const user7 = userCreator4("Tim", 5);
user6.increment();
