let div=document.querySelector("#d");
console.dir(div);
console.log(div.getAttribute("id"));

div.setAttribute("id", "new");    //can also be done dynamically

div.style.backgroundColor="purple";
div.style.fontSize="20px";
// div.style.visibility="hidden";  //

let el=document.createElement("button");
el.innerText="Click me!";

div.append(el);

let newh1=document.querySelector("h1");
newh1.innerText="hii";
document.querySelector("div").prepend(newh1);

let para=document.querySelector("p");
para.remove();

let cls=document.querySelector(".new");
// cls.setAttribute("class", "newClass");

cls.classList.add("newClass");
// cls.classList.remove("newClass");
console.log(cls.classList);
