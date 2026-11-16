// console.log("order placed")

// setTimeout(() =>{
//     let i=0;
//     while(i<=10000){
//         i++;
//     }
// },2000)

// setInterval(()=>{
//     console.log("bye")
// })

// console.log("order served")

const myPromise =new Promise((resolve,reject)=>{
       
    resolve("data recieved")
    reject("Somethng went wrong")
})

myPromise
.then(data=> console.log(data))
.catch(res => console.log(res))

