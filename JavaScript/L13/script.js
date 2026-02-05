const URL="https://dog.ceo/api/breeds/list/all";
const para=document.querySelector("#para");
const btn=document.querySelector("#btn");

// let promise=fetch(URL);      //BASICS
// console.log(promise);
 
const getList=async()=>{
console.log("Getting Data..");
let response = await fetch(URL);
// console.log(response);   //JSON format
let data = await response.json();
console.log(data.message);
for(let breed in data.message){
    // console.log(breed);
    para.innerText=breed;
}
};

btn.addEventListner("click", getList);

