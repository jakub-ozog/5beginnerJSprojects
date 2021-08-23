
// Selectors

let todoInput = document.querySelector(".item-field");
let todoButton = document.querySelector(".submit-new-item");
let todoList = document.querySelector(".items-list");

let clearlistButton = document.querySelector(".clear-list");


//Event Listeners

todoButton.addEventListener('click', addTodo);
clearlistButton.addEventListener('click', removeAllChildNodes);

//Functions

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
    trashButton.classList.add("coplete-btn");
    todoDiv.appendChild(trashButton);
    //APPEND to list
    todoList.appendChild(todoDiv);
}



function removeAllChildNodes() {
    let itemsListContainer = document.querySelector('#items-list-container');

    // itemsListContainer.firstElementChild can be used.
    let listContainerChild = itemsListContainer.lastElementChild;
    while (listContainerChild) {
        itemsListContainer.removeChild(listContainerChild);
        listContainerChild = itemsListContainer.lastElementChild;
    }
console.log('usuneli dla jej');

}







