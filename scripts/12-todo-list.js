const todoList = [{
        name: 'make dinner', 
        dueDate: '2025-6-22'
    }, {
        name: 'wash dishes',
        dueDate: '2025-6-22'    
    }];

renderTodoList();

function renderTodoList()
{
    let todoListHTML = '';

    // for loop replaced by .forEach()
    // regular function updated with arrow function
    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class = "delete-todo-button js-delete-todo-button">Delete</button>  
        `;
        todoListHTML += html;
    });

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

    //new thing
    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            });
        });
}

//replaced onClick with eventListener
document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    })

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value; 

    todoList.push({
        name, 
        dueDate
    });

    inputElement.value = '';

    renderTodoList();
}