//1-------------------------
function remove2(arr1){
let unique=[];
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1.length;i++){
        if(arr1[i]===arr1[j]){
            unique.push(arr1[i])
            break;
        }
    }
// }
// if(!unique.includes(arr1[i])){
//     unique.push(arr1[i])
// }

// return unique
}
}
console.log(remove2([2,4,3,4,2]))

// function largest2(arr){
// let largest=arr[0]
// let largest2=-Infinity
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest=arr[i]
// }
// }

// for(let i=0;i<arr.length;i++){
//     if(arr[i]<largest &&arr[i]> largest2){
//         largest2=arr[i]
//     }
// }
//     return largest2;
// }
// console.log("second largest:",largest2([55,50,3,12,42,50]))

// function numofwords(str) {
//   let words = str.split(" ");
//   return words.length;
// }
// console.log(numofwords("its js"));

//4========================
// function arrindex(arr,num){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===num){
//             return i
//         }
//     }
// }
// let arr=[4,5,3,6]
// console.log(arrindex(arr,6))

//5=======================
// function common(arr1,arr2){
//     let double=[];
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]===arr2[j]){
//                 double.push(arr1[i])
//                 break;
//             }
//         }
//     }
//     return double;
// }~// let arr1=[6,7,3,8]
// let arr2=[7,5,3,9]
// console.log(common(arr1,arr2))

