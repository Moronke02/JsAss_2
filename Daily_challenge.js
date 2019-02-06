//Sum array
function sumArray(arr) {
    if(!Array.isArray(arr)) return;
    let sum = 0;
    for(i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    return sum;
};
var arr = [1,2,3,4,5];
//Returns 15
console.log(sumArray(arr));