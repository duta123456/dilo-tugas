
let todos = getTodos();
const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    console.log(e.target.checked)
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
    location.reload();
})

document.querySelector('#update-todo').addEventListener('click', function(e) {
    e.preventDefault()
    // todos.push({
    //     text: e.target.elements.text.value,
    //     completed: true
    // })
    for(loops = 0; loops<todos.length;loops++)
    {
        if(todos[loops].text==this.value){
            let todoCompleted = todos[loops].completed
            if(todoCompleted==true)
            {
                todos[loops].completed=false
            } else {
                todos[loops].completed=true
            }
        }
    }
    // console.log(todos)
    saveTodos(todos)
    // console.log(saveTodos())
    renderTodos(todos, filters)
    location.reload();
    // e.target.elements.text.value = ''
})

// remove local storage
// localStorage.removeItem('todos')