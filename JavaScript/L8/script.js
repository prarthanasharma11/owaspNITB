let btn1=document.querySelector("#btn");
btn1.onclick=()=>{
    console.log("Handler1");
    let a=0;
    a++;
    console.log(a);
}

btn1.onclick=(evt)=>{
    console.log("Handler2");
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt);
    console.log(evt.clientX, evt.clientY);
}

let handler3=()=>{                     //for making callback reference same
  console.log("Handler3");         
}
btn1.addEventListener("click", handler3);

btn1.removeEventListener("click", handler3);

btn1.addEventListener("click", ()=>{
    console.log("Handler4");
})
let body=document.querySelector("body");

// PQ
let currMode="Light";
let tglbtn=document.querySelector("#toggleButton");
tglbtn.addEventListener("click",()=>{
   if(currMode==="Light"){
   body.style.backgroundColor="black";
   body.style.color="white";
   currMode="Dark";
   }
   else{
    document.querySelector("body").style.backgroundColor="white";
   document.querySelector("body").style.color="black";
   currMode="Light";
   }
})