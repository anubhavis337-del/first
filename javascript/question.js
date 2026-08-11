// function duplicate(arr){
//     let duplicate=[]
//     for(let i=0;i<arr.length;i++)
//         for(let j=i+1;j<arr.length;j++)
//        if(arr[i]=arr[j]){
//         shift.arr[i];
//     }else{
//         duplicate.push(arr[i])
//     }
//     return duplicate;
// }
// console.log(duplicate([33,6,5,3,5,4,56,56]))



// function words(str){
//     let count=0
//     for (let i=0;i<str.length;i++){
//          return count++;

//     }
// }console.log(words("anu"))


// let object={
//     name:"anu",
//     age:22,
//     email:"anubhavis@gmail.com"
// }
// for(const elem of Object.keys(object)){
//     console.log(`${elem}: ${object[elem]}`)
// }

//1===================
//  for(let i=1;i<=5;i++){
//     let star=""
//     for(let j=1;j<=i;j++){
//         star+="*"
        
//     } console.log(star)
// }

//2====================
// for(let i=5;i>=1;i--){
//     let star=""
//     for(let j=i;j>=1;j--){
//         star+="*"
        
//     } console.log(star)
// }

//3===============================
// for(let i=1;i<=5;i++){
//     let star=""
//     for(let j=0;j<=5-i;j++){
//       star+="  ";
//     }  
//      for (let k=1;k<=i;k++){
//         star+="* ";
//     }
//     console.log(star)
// }

//4===========================
for(let i=5;i>=1;i--){
    let star=""
    for(let j=1;j<=5-i;j++){
        star+="  "
    }
    for(let k=1;k<=i;k++){
      star+="* "
    }
    console.log(star)

}

//5===============================

