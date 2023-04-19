let number = 20;
let number2 = 13;

console.log(divBy10(number));
console.log(divBy10(number2));


function divBy10(num){
if(num %10 == 0){
 return true;
}
else{
    return false;
}
}