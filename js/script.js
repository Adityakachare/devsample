console.log("This is the js code from the html file");
const myName = "Aditya";
const year = "2003";
console.log(myName);
console.log(year);

var num = [1,2,4,5,"Aditya"];
console.log(num);

var myNum1 = 20;
var myNum2 = 50;

if(myNum1>myNum2){
    console.log("1st Number is greater");
}
else{
    console.log("2nd Number is greater");
}


var myNum3 = 0;

if(myNum3>0){
    console.log("POSITIVE")
}
else if(myNum3<0){
    console.log("NEGATIVE");
}
else{
    console.log("ZERO")
}


var num1 = 20;
var num2 = 30;
switch(num1>num2){
    case true:
        console.log("CASE1");
        break;
    
    case false:
        console.log("CASE2");
        break;

    default:
        console.log("DEFAULT")
}


var a = "3";
var b = 2;

if(a==b){
    console.log("VALUE SAME")
}
else{
    console.log("NOT SAME")
}

var a = 2;
var b = 0;
var c = 2;

b=a--;
c=--a;

console.log(a,b,c);