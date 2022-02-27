
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
const result = generatedFunc(3);