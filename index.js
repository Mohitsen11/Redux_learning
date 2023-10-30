// lets learn Redux Compose function
import { compose } from "redux";

function removeSpaces(str){
    // remove the spaces
    return str.split(" ").join("");
}

console.log(removeSpaces("hi my name is mohit"));

function repeatString(str){
    return str+str;
}

console.log(repeatString("hi my name is mohit"));

function makeUpperCase(str){
    return str.toUpperCase();
}

console.log(makeUpperCase("hi my name is mohit"));

const result1 = removeSpaces("hi my love");
const result2 = repeatString(result1);
const result3 = makeUpperCase(result2);

console.log(result1 , result2 , result3);

const composedFunction = compose(removeSpaces , repeatString , makeUpperCase);

console.log(composedFunction("hi my name is mohit"))