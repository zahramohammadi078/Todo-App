let inputBox = document.querySelector(".input-box");
let addBtn = document.querySelector(".add-btn");
let card = document.querySelector(".card");
let todoArray = [];

addBtn.addEventListener("click", addBtnFunc);
inputBox.addEventListener("keydown", enterFunc);
/*--------------------------creat btn and items----------------------------------*/
function creatTodoItem(todoObj){


  let newDivOne=document.createElement("div")
  newDivOne.classList.add("todo-items")
  let newP=document.createElement("p")
  newP.classList.add("todotext")
  newP.textContent=todoObj.title
  // newDivOne.append(newP)
  let newDivTwo=document.createElement("div")
  newDivTwo.classList.add("allbtns")
  //btnOne
  let btnOne=document.createElement("button")
  btnOne.classList.add("btn")
  btnOne.classList.add("Complate")
  btnOne.textContent="Complate"

  btnOne.addEventListener("click",function(){
    

    if (newP.style.textDecoration === "line-through") {
      newP.style.textDecoration = "none";
      btnOne.textContent = "Complete";
      newDivOne.style.opacity = "1";
      todoObj.complete = false;
  } else {
      newP.style.textDecoration = "line-through";
      btnOne.textContent = "incomplete";
      newDivOne.style.opacity = "0.5";
      todoObj.complete = true;
  }
     
 

    

  console.log(todoArray);
    console.log("click btn one");
  })
// newDivTwo.append(btnOne)
//btnTwo
  let btnTwo=document.createElement("button")
  btnTwo.classList.add("btn")
  btnTwo.classList.add("b1")
  btnTwo.classList.add("Delete")
  btnTwo.textContent="Delete"

  btnTwo.addEventListener("click",function(){

    newDivOne.remove()
    todoArray = todoArray.filter(function(todo) {
      return todo.id !== todoObj.id;
  });
  
    console.log("click btnTwo");
    console.log(todoArray);
  })
// newDivTwo.append(btnTwo)
//btnThree
  let btnThree=document.createElement("button")
  btnThree.classList.add("btn")
  btnThree.classList.add("b1")
  btnThree.classList.add("Edite")
  btnThree.textContent="Edite"

  btnThree.addEventListener("click",function(){
    let editText = prompt("Edit the item:", newP.textContent);
    if (editText !== null) {
      newP.textContent = editText;
      todoObj.title = editText;
    }
    console.log("click btnThree");
    console.log(todoArray);
  })
newDivTwo.append(btnOne,btnTwo,btnThree)

newDivOne.append(newP,newDivTwo)

card.append(newDivOne)


  


}
/*--------------------------enter and keydown-------------------------------*/
function enterFunc(event){

  if (event.keyCode === 13) {
    if (inputBox.value) {
      let todoValue = inputBox.value.trim();
      let todoObj = {
        id: todoArray.length + 1,
        title: todoValue,
        complete: false, // Change 'complete' to 'false' initially
      };
      todoArray.push(todoObj);
      creatTodoItem(todoObj);
      inputBox.value = "";
    } else {
      alert("It is empty");
    }
  }

}
/*------------------------click add btn--------------------------------*/

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
///
document.querySelectorAll('.filter-btn').forEach(item => {
  item.addEventListener('click', event => {
    const filter = event.target.textContent.toLowerCase();
    filterTodos(filter);
  });
});


function filterTodos(filter) {
  const todoItems = document.querySelectorAll('.todo-items');
  todoItems.forEach(item => {
    const isComplete = item.querySelector('.Complate').textContent === 'incomplete';
    const isActive = !isComplete;
    switch (filter) {
      case 'complete':
        if (isComplete) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
        break;
      case 'active':
        if (isActive) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
        break;
      default:
        item.style.display = 'flex';
        break;
    }
  });
}


