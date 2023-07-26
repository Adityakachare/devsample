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

// OBJECT
const items = {
    food: 1000,
    drinks: 2000,
    nm: "Aditya"
};

console.log(items.nm);

cart = 0;
function addToCart(x){
    return cart+x;
}

function addItem(x){
    cart = addToCart(x);
}

addItem(items.food);
addToCart(items.food);
addToCart(items.drinks);
console.log("Cart: ", cart);
var cart;


var add = () => {
    x = 5+6;
    return x;
    
};

console.log(add());



//THIS
const ourObject = {
    name: "This keyword",
    getThis: function(){
        console.log(this)
    }
};

ourObject.getThis();


//RECURSION

var num = 1;
function printNum(){
    console.log(num);
    num++;

    if(num<=10){
        printNum();
    }
    else{
        return;
    }
}

printNum();



//Day 15: 

//destructuring

function getArray(){
    return [1,2];
}

const [p,q,r] = getArray();

console.log(p);
console.log(q);
console.log(r);

function sumAndMultiply (a, b){
    return [a+b, a*b]
}

const array = sumAndMultiply(10, 3);

console.log(array)

//MAP

var myArray = [1,2,3];

var newArray = myArray.map((e) => {
    if(myArray[0] == 1){
        return e+5;
    }
    else{
        return e+2;
    }
});

console.log(newArray);
console.log(myArray);


//FILTER

var abc = [10,20,30,40,50]; 

var filteredArray = abc.filter(e => e<50);

console.log(filteredArray);
console.log(abc);

//ES 6

function hello(name = "Aditya"){
    
    console.log("Hello " +name);
    
}
hello("World");

//ES6
//Template Literals
console.log("Apple\nBanana\nGrapes\nMango")
console.log(`
Apple
Banana  Grapes
Mango
`)
console.log(`

`)
//SCOPING

function outer(){
    let name1 = "Aditya"
    

    function inner(){
        let name1 = "Aryan"
        console.log(name1)
    }
    inner();
    console.log(name1)
}
outer()



//FETCHING DATA FROM JSON PLACEHOLDER
//json => converts fetched data to object key value pair
fetch("https://jsonplaceholder.typicode.com/users")
.then((result)=>result.json())
.then((data)=>console.log(data))


console.log(`

`)

const getData = async () => {
    const resultf = await fetch("https://jsonplaceholder.typicode.com/users");
    const data1 = await resultf.json();
    console.log(data1);
};

getData();