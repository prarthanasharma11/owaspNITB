//setTimeOut
// function hello(){
//     console.log("Hello");
// }

// console.log("one");
// console.log("two");
// console.log(hello);
// console.log("three");
// setTimeout(hello, 1000);  //time in ms

//CALLBACK
function sum(a, b){
    console.log(a+b);
}
function calculator(x, y, sumCallback){
    sumCallback(x, y);
}
calculator(1, 2, sum);

//CALLBACK HELL
// function getData(val, getNextData){
//  setTimeout(()=>{
//     console.log("data ", val);
//      if(getNextData){
//         getNextData();
//     }
//  }, 2000);
// }

// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4);
//         })
//     })
// })

//Promises

// let promise= new Promise((resolve, reject)=>{
//      console.log("This is a promise..");
//     //   reject("Something went wrong");
//       resolve("Successfully, fullfilled");  // if won't give anything then it will be pending
// });



// function _getData(getID, _getNextData){
// return new Promise((resolve, reject)=>{
// setTimeout(()=>{
//     console.log("DATA ", getID);
//     resolve("Success");
//      if(_getNextData){
//         _getNextData();
//     }
//  }, 10000);
// });
// }
// let _promise=_getData("Hello");


// const getPromise=()=>{
//     return new Promise((resolve, reject)=> {
//     console.log("I am a promise");
//     // resolve("SUCCESS");
//     reject("error");
// });
// }
// let promise=getPromise();
// promise.then(()=>{
// console.log("Promise fullfilled");
// });
// promise.catch((err)=>{
// console.log("Rejected", err);
// })



//PROMISE CHAIN

// function asyncfn1(){
//     return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//         console.log("Data1");
//         resolve("Success");
//     }, 5000);
// });
// }

// function asyncfn2(){
//     return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//         console.log("Data2");
//         resolve("Success");
//     }, 5000);
// });
// }

// console.log("fetching data1..");
// let p1=asyncfn1();
// p1.then(()=>{
// console.log("fetching data2..");
// asyncfn2().then((res)=>{});   // Can give .then directly to fn also
// });


// function getData(val){
//     return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     console.log("data ", val);
//     resolve("SUCCESS");
//     }, 3000);
//     });
// }
// getData(1).then((res)=>{     //ONE WAY OF WRITING
// console.log(res);
// getData(2).then((res)=>{        
// console.log(res);
// });
// });

// getData(1).then(()=>{          //ACTUAL WAY OF WRITING PROMISE CHAIN
//     return getData(2);
// }).then(()=>{
//     return getData(3)
// }).then((res)=>{
//     console.log(res);
// });


//ASYNC-AWAIT
function getData(val){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
    console.log("Weather data ", val);
    resolve("Success");
    }, 5000);
    });
}
(async function getAllData(){       //Used IIFE here for invoking getAllData
    await getData(100);
    await getData(200);
    console.log("Fetching data..");
    await getData(300);

})();
// getAllData();