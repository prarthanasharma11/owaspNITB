let arr=["ram", "shyam", "hari", "krishna"];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
for(let hero of arr){       //for-of
     console.log(hero);
}
for(let hero in arr){       //for-in
     console.log(hero);
}
for(let hero in arr){
     console.log(arr[hero]);
}

arr.push("dev");

// PQ
let mncs=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(mncs.shift());
console.log(mncs.splice(1,1,"Ola"));
console.log(mncs.push("Amazon"));