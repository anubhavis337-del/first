let arr=[2,9,-10,20,-6,19]
let sum=0
for(let i=0; i<arr.length; i++){
    if(arr[i]<0){
        continue;
}else{
    sum=sum+arr[i]
    }
}console.log(sum)