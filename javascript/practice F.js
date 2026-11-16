// function check(num){
//     if(num%2==0){
//         return "even";
//     }else
//         return "odd";
    
// }console.log(check(5))

// function sum(arr){
//      let sum=0;
//     for(let i=0;i<arr.length;i++){
//        sum+=arr[i]
//     }
//     return sum;
// }console.log(sum([4,8,3]))

// function countVowel(str){
//     count=""
//     for(let i=0;i<str.length;i++){
//         if("a"===str[i]||"e"===str[i]||"i"===str[i]||"o"===str[i]||"u"===str[i])
//             count++
//     }return count;
// }console.log(countVowel("anubhavi"))

function reverse(str){
    reverse=""
    for(let i=str.length-1;i>=0;i--){
        reverse+=str[i]
    }return reverse;
}console.log(reverse("moon"))