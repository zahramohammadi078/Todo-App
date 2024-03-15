let inputBox = document.querySelector(".input-box");
let addBtn = document.querySelector(".add-btn");
let card = document.querySelector(".card");
let todoArray = [];

addBtn.addEventListener("click", addBtnFunc);

function creatTodoItem(todoObj){
  let todoItem=document.createElement("div")
  todoItem.classList.add("add-new-item")
  todoItem.textContent=todoObj.title

  card.appendChild(todoItem)


}

function addBtnFunc() {
  // let todoValue=inputBox.value
  if (inputBox.value) {
    
    let todoValue = inputBox.value.trim();
    let todoObj = {
      id: todoArray.length + 1,
      title: todoValue,
      complate: false,
    };
    todoArray.push(todoObj);
    console.log(todoObj);
    creatTodoItem(todoObj)

    inputBox.value = "";

} else {

     alert("it is empity");

    //   return
    
  }
  console.log(todoArray);
}


////
function makeTodo(){

  

 

}
