const todoList = ['make dinner', 'wash dishes']; //saving data for reference

renderTodoList();

function renderTodoList() //generating the HTML
{
    let todoListHTML = '';
    for (let i=0; i<todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}

/*
    Main Idea of JavaScript ->
    1. Save the data
    2. Generate the HTML
    3. Make it interactive (will be done later in lesson 11 part 2)

    Rock, Paper, Scissors project was different; as all the HTML was already present and we just had to modify it by JS.
    
    In this lesson that we did was One step above what we did for Rock Paper Scissors.
*/