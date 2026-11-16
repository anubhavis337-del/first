// let boxes=document.getElementById("boxes")
// let addbtn=document.getElementById("addbtn")
// addbtn.addEventListener("click", function () {
//     let box= document.createElement("div")
//     box.classList.add("box")

//     let removeBtn=document.createElement("button")
//     removeBtn.innerText="Remove"
//     box.appendChild(removeBtn)
//     removeBtn.addEventListener("click",function(){
//            box.remove();
//     })
//     boxes.appendChild(box)
    
// })

const addTodo =document.getElementById("addForm")
console.log(addTodo)

//event 
addTodo.addEventListener("submit", function(event){
    //event.preventDefault()
    console.log(event)

let item=document.getElementById("item").value
})