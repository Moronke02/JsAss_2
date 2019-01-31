// Question 2
const myArray =[
    'Fried Rice', 
    'Jollof Rice',
    'Moi-moi', 
    'Salad', 
    'Chicken'
];
for(let i = 0; i < myArray.length; i++){
    console.log(
        myArray[i]
    )
}



// Question 3
const data ={
    name: "Luke Skywalker",
    occupation: "Jedi",
    powers: "The Force"
}
for (let key in data){
    console.log(data[key])
}



// Question 4a
for(let i = 1; i <= 10; i+=2) {
    console.log(i)
}
// 4b
for(let i = 2; i <= 10; i+=2) {
    console.log(i)
}



//Question 5: Recursion
function sum(x) {
    if (x < 0) return;
    if (x === 0) return 0;
    return x + sum(x-1);
}
sum(5);




// Question 6: Promise
let FavoriteFruit = function(fruit) {
    // List of fruits
    let fruits = [
    "Apple",
    "Carrot",
    "Cherry",
    "Plum",
    "Watermelon"
 ];
//
 return new Promise(
    function(resolve,reject){
        let fruitsIndex = fruits.indexOf(fruit);
        if (fruitsIndex !== -1) {
            return resolve(fruits[fruitsIndex]);
        }
        reject("Fruit not found!");
    }
    );
}

FavoriteFruit("Carrot")
.then(function(result){
    console.log(`${result} was found!`);
})
.catch(function(error){
    console.log(error.message)
});

function checkFruit () {
    try {
        console.log(fruit);
    }catch(error){
       console.log("The Error IS" +error.message);
    }
}


