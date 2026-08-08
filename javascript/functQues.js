//1---------------------
// function oddOrEven(num) {
//     if(num % 2 === 0) {
//         return "even";
//     }   else {
//         return "odd"
//     }
// }
// console.log(oddOrEven(4))

//2-----------------------
// function sumofarray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumofarray([1, 2, 3, 4, 5]));

//3--------------------
function vowelinstring(str) {
  let vowel = "";
  for(i=0;i<=str.length;i++)
  if ("a" == str[i] || "e" == str[i] || "o" == str[i] || "i" == str[i] || "u" == str[i]) {
    vowel++
 
    
  }
  return vowel;
}
console.log(vowelinstring("aeiou"))

//4===========================
// function strreverse(str){
//     let rev=""
//     for(i=str.length-1;i>=0;i--){
//         rev=rev+str[i]
//     }
//     return rev;
// }
// console.log(strreverse("anu"))

//5===================
// function largestnum(arr){
//    let max=arr[0]
//     for(let i=0;i<arr.length;i++){
//        if(arr[i]>max){
//         max=arr[i];
//        }
//     }
//     return max
// }
// console.log(largestnum([3,8,6,4,7,32]))

//6=========================
// function negativenum(arr){
//     let neg=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<0){
//             neg.push(arr[i])
//         }
//     }   
//     return neg
// }       
//     console.log(negativenum([-3,5,-6,7,-9,2]))


    //7=========================
    // function checkpalindrome(str){
    //     let rev=""
    //     for(i=str.length-1;i>=0;i--){
    //         rev=rev+str[i]
    //     }
    //     if(str==rev){
    //         return "palindrome"
    //     }
    //     else{
    //         return "not palindrome"
    //     }   
    // }
    // console.log(checkpalindrome("noon"))

   // 8=========================
//    function factorial(num){
//     let fact=1
//     for(let i=1;i<=num;i++){
//         fact=fact*i
//     }
//     return fact
//     }
//     console.log(factorial(5))
        
//9=========================
function repeatedvalue(arr){
    let repeated=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                repeated.push(arr[i])
            }
        }       
    }
    return repeated
}
console.log(repeatedvalue([2,3,4,5,6,7,2,3,4]))

//10=========================
// function counteven(num){
//     let count=0
//     for(let i=0;i<=num;i++){
//         if(i%2==0){
//             count++
//         }       

//     }
//     return count
// }
// console.log(counteven(10))

//11=============================
// function countvalues(arr){
//     let positive=0

//     let negative=0
//     let zero=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>0){
//             positive++
//         }
//         else if(arr[i]<0){
//             negative++
//         }
//         else{
//             zero++
//         }
//     }
//     return {positive,negative,zero}
// }
// console.log(countvalues([1,-2,3,-4,0,5]))
       