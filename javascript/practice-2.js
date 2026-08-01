const neet ={
    
    paper: "leak",
    exam:"reschedule",
    protest: "ongoing",
    students:100000

};

//access last value of an object
const key=Object.keys(neet)
console.log(key[key.length-1])


const value=Object.values(neet)
console.log(value[value.length-1])