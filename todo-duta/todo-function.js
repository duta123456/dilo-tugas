
const getTodos = function() {
    const todosJson = localStorage.getItem('todos')
    const todos = (todosJson !== null) 
        ? JSON.parse(todosJson)
        : []
    
    return todos;
}

// save todos
const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}
// update todos
const updateTodos = function(todos) {
    // localStorage.setItem('todos', JSON.stringify(todos))
    // let data = localStorage.getItem('todos')
    let update= JSON.parse(todos);
            if(update[index].completed=='false'){
            update[index].completed = 'true';
             
            } else {
                update[index].completed = 'false';
            }
            localStorage.setItem('update', JSON.stringify(update));
}
// render todos
const renderTodos = function(todos, filters) {
    const filterTodos = todos.filter(function(todo) {
        const searchText = todo.text.toLocaleLowerCase().includes(filters.searchText.toLocaleLowerCase())
        const hideCompleted = !filters.hideCompleted || !todo.completed
        
        return searchText && hideCompleted
    })
    
    const incompletedTodos = filterTodos.filter(function(todo) {
        return !todo.completed
    })
    
    document.querySelector('#todos').innerHTML = '';
    document.querySelector('#todos').appendChild(summaryTodo(incompletedTodos))
    
    filterTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodo(todo))
        document.querySelector('#todos').appendChild(generateButtonTodo(todo))
    })
}

// generate todo to DOM
const generateTodo = function(todo) {
    const p = document.createElement('p');
    // p.textContent = todo.text
    p.textContent = `Daftar To Do :${todo.text} Penyelesaian : ${todo.completed}`
    return p
}

const generateButtonTodo = function(todo) {
    const btn = document.createElement('button');
    btn.innerHTML = "Completed";
    // p.textContent = todo.text
    // q.textContent = `Selesaikan`
    btn.name = "completed"; 
    btn.value = todo.text;
    btn.id = "update-todo";  
    return btn
}
// summary todo
const summaryTodo = function(incompletedTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `Sisa todo ${incompletedTodos.length} lagi`

    return summary
}