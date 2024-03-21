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
// newDivTwo.append(btnOne)
//btnTwo
  let btnTwo=document.createElement("button")
  btnTwo.classList.add("btn")
  btnTwo.classList.add("b1")
  btnTwo.classList.add("Delete")
  btnTwo.textContent="Delete"
// newDivTwo.append(btnTwo)
//btnThree
  let btnThree=document.createElement("button")
  btnThree.classList.add("btn")
  btnThree.classList.add("b1")
  btnThree.classList.add("Edite")
  btnThree.textContent="Edite"
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
      complate: true,
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

/*---------------------------------------------*/
////
function makeTodo(){

  

 

}


/////

