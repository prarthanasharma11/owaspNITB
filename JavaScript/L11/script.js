//OBJ
const  student={
section:"A",
marks: 65,
stuNo(){                                  //way 1 of defining method
    console.log("Total Strength");
},

_stuNo: function () {                      //way 2 of defining method
    console.log("Total Strength");
}
};

const employee={
    salary: 10000,
};

employee.__proto__=student;


//CLASS
class toyotaCar{
    constructor(model){
        console.log("creating new object..");
        this.Model=model;
    }
    car(){
        console.log("TOYOTA");
    }

    bName(brand){
        this.brandName=brand;
    }
};

let fortuner= new toyotaCar;
// fortuner.bName("FORTUNER");
let lexus= new toyotaCar;
lexus.bName();
let abcd = new toyotaCar("A9012");
console.log(abcd);

//parent n child
class person1{
    constructor(name){
       this.Name=name;
    }
    
    hello(){
        console.log("Hello");
    }
    work(){
        console.log("parent class");
    }
}

class person2 extends person1{
    constructor(name){
      super(name);          //to invoke parent class constreuctor
      console.log(this.Name=name);
    }
    new(){
         console.log("new obj");
    }
     work(){
        console.log("child class");
    }
}

let p1= new person2("Prarthana");
let p2= new person1("Reyansh");

//PQ1
let DATA="Secret info";

class User{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("viewing data..");
        console.log(this.name);
        console.log(this.email);
    }
}

class Admin extends User{
    editData(){
       console.log(this.name);
       console.log(this.email);  
       this.DATA="New info";
    }
}

let u1= new User("PSharma", "psharma@gmail.com");
u1.viewData();

let u2= new Admin;
u2.name="PrarthanaSharma";
u2.email="prarthanasharma@gmail.com";
u2.editData();

//Error Handling
let a=3;
let b=2;
console.log("a+b= ", a+b);
console.log("a+b= ", a+b);
try{
    console.log("a+b= ", a+c);
}
catch(err){
console.log(err);
}
console.log("a-b= ", a-b);
console.log("a*b= ", a*b);
