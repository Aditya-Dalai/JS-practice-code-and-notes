const todoList = [{
        name: 'make dinner', 
        dueDate: '2025-6-22'
    }, {
        name: 'wash dishes',
        dueDate: '2025-6-22'    
    }]; //saving data for reference

renderTodoList();

function renderTodoList() //generating the HTML
{
    let todoListHTML = '';
    for (let i=0; i<todoList.length; i++) {
        const todoObject = todoList[i];

        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject; //Destructuring - a shortcut for above commented lines.

        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        " class = "delete-todo-button">Delete</button>  
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value; 

    todoList.push({
        // name: name,
        // dueDate: dueDate,
        name, 
        dueDate // shorthand property syntax (cuz property and variable name are same)
    });

    inputElement.value = '';

    renderTodoList();
}

/*
    Main Idea of JavaScript ->
    1. Save the data
    2. Generate the HTML
    3. Make it interactive

    Rock, Paper, Scissors project was different; as all the HTML was already present and we just had to modify it by JS.
    
    In this lesson that we did was One step above what we did for Rock Paper Scissors.
*/