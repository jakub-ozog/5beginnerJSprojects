
// Selectors

let todoInput = document.querySelector(".item-field");
let todoButton = document.querySelector(".submit-new-item");
let todoList = document.querySelector(".items-list");
let clearlistButton = document.querySelector(".clear-list");
let form = document.querySelector("form");
let  errorElement = document.querySelector('.error');
//Event Listeners

todoButton.addEventListener('click', addTodo);
clearlistButton.addEventListener('click', removeAllChildNodes);

//Functions


// todoInput.addEventListener('submit', (e) => {
//     if(todoInput.value === '' || todoInput.value == null) {
//         alert('wrong!');
//         return false;
//     }
//     return true;
// })

// todoButton.addEventListener('click', validateInput);


// function validateInput(e) {
//   e.preventDefault();
//   let form = document.querySelector("#MainForm");
//   if (todoInput.value === "" || todoInput.value == null) {
//       alert('wrong');
//       return false;
//   }
  
  
// }








function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    //Create Todo DIV 
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");


    //Create UL/LI
    
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check complete button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = 'Complete';
    completeButton.classList.add("coplete-btn");
    todoDiv.appendChild(completeButton);

    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = 'Trash';
    trashButton.classList.add("trash-button");
    trashButton.addEventListener('click', removeOneChildNode);
    todoDiv.appendChild(trashButton);
    //APPEND to list
    todoList.appendChild(todoDiv);

}

function removeOneChildNode(event) {
    let parentElem = event.target.closest('.todo')
    parentElem.remove();
    console.log('div deleted');
}

 function removeAllChildNodes (event) {
     const myNode = document.querySelector('.items-list');
     myNode.innerHTML = '';
 }





