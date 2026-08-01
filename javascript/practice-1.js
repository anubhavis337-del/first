
// sum=0
// for(let i=10;i>=1;i--){
//  sum=sum+i
//  console.log(sum)
// }console.log(sum)

// fact=1
// for(let i=1;i<=5;i++){
//     fact=fact*i
// }
// console.log("answer",fact)
// for(i=1;i<=10;i++){
//     num=5*i
//     // console.log(`5 X ${i}= ${num}`);
//     console.log("5 X "+i+"="+ num)
// }

// let a ="Anubhoavi"
// vowel=""
// consonant=""
// for(i=0;i<a.length;i++){
//     if("a"==a[i]||"i"==a[i]||"o"==a[i]||"u"==a[i]||"v"==a[i]){
//         vowel=vowel+a[i]
//         // console.log(a[i])

// }else{
//     consonant+=a[i]
// }
// }console.log("vowels are",vowel)
// console.log("consonant",consonant)

// let str=" Anu  bhavi "
// console.log(str.trim());
// console.log(str.length);
// console.log(str.trimEnd().length);
// console.log(str.trimStart().length);
// console.log(str.trim().length)
// console.log(str.replaceAll(" ",""))

// let b="ANUBHAvi"
// console.log(b.toUpperCase())
// console.log(b.toLowerCase())

// let arr=[5,7,3,9,34,56,3,2,4]
// let max=arr[0]
// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i]
    
//     }
// }
// console.log(max)


// let arr=[4,2,6,3,6,9,47,28,7]
// let min=arr[0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<min){
//         min=arr[i]
        
//     }
// }console.log("minimum number", min)

//=========================================================================
// for(i=arr.length-1;i>=0;i--){
//     console.log(arr[i])
// }

//========================================================
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
// }console.log(sum)

//==========================================================================
// let even=[]
// let odd=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         even.unshift(arr[i])
    
//     }else{
//        odd.unshift(arr[i])
//     }
// }console.log(even)
// console.log(odd)
// console.log(even.length)
// console.log(odd.length)

//=============================================
for(let i=1;i<=5;i++){
    pattern=""
    for(let j=1;j<=i;j++){
        pattern+="*";
    }
    console.log(pattern);
}
    