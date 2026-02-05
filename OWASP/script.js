let entryVdo=document.querySelector("#ev");
let frontVdo=document.querySelector("#fv");
let e1=document.querySelector("#e1");
let e2=document.querySelector("#e2");
let e3=document.querySelector("#e3");


setTimeout(() => {
  entryVdo.style.opacity = "0";
  setTimeout(() => {
    frontVdo.style.display = "block";
    frontVdo.style.opacity = "1";
    frontVdo.style.pointerEvents = "none";
   }, 2000); 
}, 5000);


const imgs = [
  "/OWASP/content./e3.jpg",
  "/OWASP/content./e2.JPG",
  "/OWASP/content./e1.png"
];

let i = 0;
const boxes = document.querySelectorAll(".pics"); /*e1, e2, e3*/

function changeImages() {
  boxes.forEach((box, index) => {
    const imgIndex = (i + index) % imgs.length;
    box.style.backgroundImage = `url('${imgs[imgIndex]}')`;
    box.style.backgroundSize = "cover";
  });

  i = (i + 1) % imgs.length;

  setTimeout(changeImages, 2000); 
}


changeImages();
