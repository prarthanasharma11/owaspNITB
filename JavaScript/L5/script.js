// const sum=(a,b) =>{
//   return a+b;
// }

// // PQ1

// function input(str){
//     let v=0;
//     for(let i of str){
//         if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u' || i=='A' || i=='E' || i=='I' || i=='O' || i=='U')
//             v++;
//     }
//     return v;
// }

// let str=("Reyansh Sharma");
// console.log(input(str));

// // PQ2

// const arrowInput = (_str)=>{
//     let v=0;
//     for(let i of _str){
//         if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u' || i=='A' || i=='E' || i=='I' || i=='O' || i=='U')
//             v++;
//     }
//     return v;
// }

// let _str=("Prarthana Sharma");
// console.log(arrowInput(_str));

// forEach
let arr=["dhar", "indore", "ujjain", "bhopal"];

arr.forEach((val,i,arr)=>{
    console.log(val.toUpperCase(),i,arr);
});

// PQ
let _arr=[1,2,3,4,5];

_arr.forEach((v)=>{
    console.log(v*v);
});

// another way of writing call back fn
let nums=[12,18,32];
let print=(num)=>{
    console.log(num);
}
nums.forEach(print);

// PQ1
let marks=[89,65,90,97,92,79];
const _print=(val)=>{
   return val>90;
}
console.log(marks.filter(_print));

// PQ2
let n=prompt("Enter a number");
let arr2;
for(let i=0;i<n;i++){
    arr2[i]=i+1;
}
let sum= arr2.reduce((result, cv)=>{
     return result+cv;
});

console.log(sum);
