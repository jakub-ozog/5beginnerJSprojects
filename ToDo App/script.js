
// Selectors

let todoInput = document.querySelector(".item-field");
let todoButton = document.querySelector(".submit-new-item");
let todoList = document.querySelector(".items-list");
let clearlistButton = document.querySelector(".clear-list");
let errorElement = document.querySelector('.error');



let form = document.querySelector("form[name='contact-form']");
let nameInput = document.querySelector("input[name='NewItemInput']")


// Validate function - needs to be fixed

/* let validateInputs = () => {
    if (!nameInput.value) {
        nameInput.nextElementSibling.classList.remove('hidden');
    }
}

todoButton.addEventListener('click', (e) => {
    e.preventDefault();
    validateInputs();
})
 */



//Event Listeners
todoButton.addEventListener('click', addTodo);
clearlistButton.addEventListener('click', removeAllChildNodes);













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



 


