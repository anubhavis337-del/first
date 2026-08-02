const user = {
    "full name": "John Chauhan",
    name: "John Doe",
    age: 30,
    email:"john@gmail.com",
    address:"delhi",
};

// console.log(user);
 
// //access elements
// //1) dot notation method
// console.log(user.name)
// console.log(user.age)
// // console.log(user."full name")

// //2) square bracket notation method
// console.log(user["full name"])
// console.log(user["age"])

//delete
// delete user.name;
// console.log(user);

//adding
// user.isMarried=false;
// console.log(user);

//modify
// user.name="Anubhavi"
// console.log(user);

// const product = {
//     name: "Laptop",
//     price: 1000,
//     brand: "Dell",
//     category: "Electronics",
//     isstock: true,
// };
// console.log(product);

//2nd method
// const person=new Object();
// person.name="Anu"
// person.age=20
// person.email="anu@gmail.com"

// console.log(person)

//seal, freeze
// Object.seal(person);

// person.age=22
// person.isMarried=true
// console.log(person)

// Object.freeze(person)
// person.age=25
// person.ismarried=true
// console.log(person)


const product = {
    name: "Laptop",
    price: 1000,
    brand: "Dell",
    category: "Electronics",
    isstock: true,
};

console.log(Object.keys(product))
console.log(Object.values(product))
console.log(Object.entries(product))
console.log(product.hasOwnProperty("name"))






