"use strict"
let myLetVariable=555;
var myVarVariable=444;
const EPSILON=2.7983;
let car="fiat";  //global
let masin="";  //global

{
    let car="tofash"; //local
masin=car; //global

}
// console.log(masin);

function checkNumber(){
    
let userAnswer=parseInt(prompt("Enter Number"));


// console.log("variable name: " + userAnswer + " !");
// console.log(`Variable value is: ${userAnswer}`);

// console.log(typeof(userAnswer));

// daxil olunan eded tekdir ya cut????

while(userAnswer<=0)
{

userAnswer=parseInt(prompt("You write wrong number! Please change it:")); 
}; 

if(userAnswer%2==0){
    alert(`${userAnswer} is a even number`);
} 
else{
    alert(`${userAnswer} is a odd number`);
}

}

function writeElements(tryCount){
  
    for(let count=0 ; count<tryCount; count++){

        text.innerHTML +=`<div class="col-12 bg-dark mt-1"><p class="text-center text-white"> it is Lorem text ${count+1}!</h1></div>`;
    
    };
}

function removeElements()
{
    text.innerHTML="";
}


let input = document.getElementById('elemCount');

let button=document.querySelector('#btn');
let text=document.querySelector('#area');
// console.log(button);

// let valueInput=elemCount.value;
button.addEventListener('click', ()=>{
removeElements();
let elemCount=input.value;
writeElements(elemCount);
console.log(elemCount);

});

// button.addEventListener('mouseout', ()=>{
//     removeElements();
// });
// document.addEventListener('click',);




