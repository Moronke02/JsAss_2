//OBJECTS
// An object is a collection of properties
//Pick any item and make a javascript object
const data = {
    name: 'Moronke Aliu',
    age: 24,
    gender: 'female',
    nationality: 'Nigerian'
}

for (let key in data) {
    console.log(data[key])
}


//Prototype
// Addition
const myPolyfill = function () {}
myPolyfill.prototype.addition = function(value1,value2) {
    return value1 + value2
}
myPolyfill.prototype.sumAll = function () {
    let sum = 0
    for(i = 0; i < arguments.length; i++){
        sum+= arguments[i]
    }
    return sum
}
const polyInstance = new myPolyfill()
console.log(polyInstance.addition(16,4));



//Subtraction
const myPolyfill = function () {}
myPolyfill.prototype.subtraction = function(value1,value2) {
    return value1 - value2
}
myPolyfill.prototype.subtractAll = function () {
    let difference= 0
    for(i = 0; i < arguments.length; i++){
        difference-= arguments[i]
    }
    return difference
}
const polyInstance = new myPolyfill()
console.log(polyInstance.subtraction(16,4));



// Multiplication
const myPolyfill = function () {}
myPolyfill.prototype.multiplication = function(value1,value2) {
    return value1 * value2
}
myPolyfill.prototype.multiplyAll = function () {
    let product = 0
    for(i = 0; i < arguments.length; i++){
        product*= arguments[i]
    }
    return product
}
const polyInstance = new myPolyfill()
console.log(polyInstance.multiplication(16,4));



//Division
const myPolyfill = function () {}
myPolyfill.prototype.division= function(value1,value2) {
    return value1 / value2
}
myPolyfill.prototype.divideAll = function () {
    let quotient = 0
    for(i = 0; i < arguments.length; i++){
        quotient/= arguments[i]
    }
    return quotient
}
const polyInstance = new myPolyfill()
console.log(polyInstance.division(16,4));

// why do we use the new keyword? To create an object from a constructor function
//what is the difference between a constructor and a method function? a constructor is used to initialize an object while a method is used to exhibit the functionality of an object.


//Callbacks
//why do we need callbacks? Give a real life example of when it is needed.We need callback to ensure that certain code doesn't execute until other code has already finished execution.
// Real life example of callback. Making a get request on twitter and wait for a response from the server before moving forward with other action.
//use callback in an example
 function   makeCake(subject,callback) {
     alert(`Tutorial for ${subject} cake.`);
     callback();
 }
 makeCake('Baking', function() {
     alert(`Cake making is fun!`)
 });