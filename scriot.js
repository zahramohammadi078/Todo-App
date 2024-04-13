const inputBox = document.querySelector(".input-box");
const addBtn = document.querySelector(".add-btn");
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const todoArray = [];

addBtn.addEventListener("click", addBtnFunc);
inputBox.addEventListener("keydown", enterFunc);
/*--------------------------creat btn and items----------------------------------*/
function creatTodoItem(todoObj) {
  let newDivOne = document.createElement("div");
  newDivOne.classList.add("todo-items");
  let newP = document.createElement("p");
  newP.classList.add("todotext");
  newP.textContent = todoObj.title;
  // newDivOne.append(newP)
  let newDivTwo = document.createElement("div");
  newDivTwo.classList.add("allbtns");
  //btnOne
  let btnOne = document.createElement("button");
  btnOne.classList.add("btn");
  btnOne.classList.add("Complate");
  btnOne.textContent = "Complete";

  btnOne.addEventListener("click", function () {
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
  });
  // newDivTwo.append(btnOne)
  //btnTwo
  let btnTwo = document.createElement("button");
  btnTwo.classList.add("btn");
  btnTwo.classList.add("b1");
  btnTwo.classList.add("Delete");
  btnTwo.textContent = "Delete";

  btnTwo.addEventListener("click", function () {
    newDivOne.remove();
    todoArray = todoArray.filter(function (todo) {
      return todo.id !== todoObj.id;
    });

    console.log("click btnTwo");
    console.log(todoArray);
  });
  // newDivTwo.append(btnTwo)
  //btnThree
  let btnThree = document.createElement("button");
  btnThree.classList.add("btn");
  btnThree.classList.add("b1");
  btnThree.classList.add("Edite");
  btnThree.textContent = "Edit";

  btnThree.addEventListener("click", function () {
    let editText = prompt("Edit the item:", newP.textContent);
    if (editText !== null) {
      newP.textContent = editText;
      todoObj.title = editText;
    }
    console.log("click btnThree");
    console.log(todoArray);
  });
  newDivTwo.append(btnOne, btnTwo, btnThree);

  newDivOne.append(newP, newDivTwo);

  container.append(newDivOne);
}
/*--------------------------enterBtn and keydown-------------------------------*/
function enterFunc(event) {
  if (event.keyCode === 13) {
    addBtnFunc();
  }
}
/*------------------------click add btn--------------------------------*/

function addBtnFunc() {
  if (inputBox.value) {
    let todoValue = inputBox.value.trim();
    let todoObj = {
      id: todoArray.length + 1,
      title: todoValue,
      complate: false,
    };
    todoArray.push(todoObj);
    console.log(todoObj);
    creatTodoItem(todoObj);

    inputBox.value = "";
  } else {
    alert("it is empty");

    //   return
  }
  console.log(todoArray);
}
/*-------------------------------all - active- complaete-----------------------*/

let btnUp = document.querySelector(".buttons");
btnUp.addEventListener("click", btnUpFunc);

function btnUpFunc(event) {
  let todoItems = document.querySelectorAll(".todo-items");

  if (event.target.classList.contains("all-btn")) {
    todoItems.forEach((item) => (item.style.display = "flex"));
  } else if (event.target.classList.contains("complete-btn")) {
    todoItems.forEach((item) => {
      if (item.querySelector(".Complate").textContent === "incomplete") {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  } else if (event.target.classList.contains("active-btn")) {
    todoItems.forEach((item) => {
      if (item.querySelector(".Complate").textContent != "incomplete") {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }
}
//////

const allBtn = document.querySelector(".all-btn");
const completeBtn = document.querySelector(".complete-btn");
const activeBtn = document.querySelector(".active-btn");

function setBackgroundColor(btn, bgColor, bgtextcolor, bgborder) {
  btn.style.backgroundColor = bgColor;
  btn.style.color = bgtextcolor;
  btn.style.border = bgborder;
}

allBtn.addEventListener("click", function () {
  setBackgroundColor(allBtn, "#05224d", "cornsilk", "#05224d");
  setBackgroundColor(completeBtn, "", "");
  setBackgroundColor(activeBtn, "", "");
});

completeBtn.addEventListener("click", function () {
  setBackgroundColor(completeBtn, "#05224d", "cornsilk", "#05224d");
  setBackgroundColor(allBtn, "", "");
  setBackgroundColor(activeBtn, "", "");
});

activeBtn.addEventListener("click", function () {
  setBackgroundColor(activeBtn, "#05224d", "cornsilk", "#05224d");
  setBackgroundColor(allBtn, "", "");
  setBackgroundColor(completeBtn, "", "");
});
