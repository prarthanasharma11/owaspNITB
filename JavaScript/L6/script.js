let heading=document.getElementById("heading");
console.log(heading);
console.dir(heading);

const print = document.querySelector(".mycls");
console.dir(print);

const _print = document.querySelectorAll(".mycls");
console.dir(_print);

let div=document.querySelector("div").children;
console.dir(div);

let _div=document.querySelector("div").innerText;      //div.innerHTML console pannel me ye likh k access ho jaega
console.dir(_div);

let h2=document.querySelector("h2");

let boxes=document.querySelectorAll(".box");

let i=1;
for(box of boxes){
      box.innerText=`unique value: ${i}`;
      i++
}