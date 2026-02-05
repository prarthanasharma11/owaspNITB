let str=("Prarthana");
for(let i of str){
    console.log(i);
}

const student={
    fullName:"Prarthana Sharma",
    marks:"100",
    age:18,
    cgpa:9.8
};

for(let key in student){
    console.log(key,":",student[key]);
}

for(let i=0;i<=100;i+=2){
    console.log(i);
}

console.log(str.toUpperCase());
str[3]="h";

// PQue
let fullName=prompt("Enter full name(all small & no space)");
let username= "@"+ fullName+ fullName.length;
console.log(`username: ${username} `);
console.log(`username: "@"+ ${fullName}+ ${fullName.length}`);
