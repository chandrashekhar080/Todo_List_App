const todoInput = document.getElementById('todo-input');

const submitButton = document.getElementById('sbt-btn');

const todosList = document.querySelector('.todos-list');
//const todos = document.getElementById('todos');

function createTodos(){
    if(todoInput.value === ''){
        alert('Please enter a todo');
        return;
    };
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
   // console.log(todoItem);
    
    const checkBox = document.createElement('input');
    checkBox.type = 'checkBox';
    checkBox.className = 'check';
    //console.log(checkBox);
    
    
    const todoHeading = document.createElement('h3');
    todoHeading.innerText = todoInput.value;
   // console.log(todoHeading);
    
    const deleteTodo = document.createElement('button');
    deleteTodo.innerText = 'Delete';
    deleteTodo.addEventListener('click', () => {
        todosList.removeChild(todoItem);
    });
    //console.log(deleteTodo);
    
    
    // todoList.appendChild(todoItem);
    // console.log(todoList);
    todoItem.appendChild(checkBox);
    todoItem.appendChild(todoHeading);
    todoItem.appendChild(deleteTodo);
    //console.log(todoItem);

    todosList.appendChild(todoItem);
    //console.log(todosList);
    if(checkBox.checked){
        todoHeading.className = 'blur';
    };

    todoInput.value = '';
    
};


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Button clicked');
    createTodos();
});

// if(checkBox.checked){
//     const todoItem = document.querySelector('#todo-item');
//     todoItem.style.textDecoration = 'line-through';
// };

// function deleteTodos(){
//     const deleteTodo = document.querySelector('#del-btn');
    
//     deleteTodo.addEventListener('click', () => {
//         const todoItem = document.querySelector('#todo-item');
//         todoItem.style.display = 'none';
//     });
// };
