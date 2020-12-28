// selector
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterTodo = document.querySelector('.filter-todo');

// eventListiners
document.addEventListener('DOMContentLoaded', getTodos);
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteList);
filterTodo.addEventListener('click', todoFilteration);

// function
function addTodo(e) {
  e.preventDefault();

  const todoValue = todoInput.value;

  // create tododiv
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //   create Li
  const newTodo = document.createElement('li');
  newTodo.innerHTML = todoValue;
  newTodo.classList.add('todo-item');

  todoDiv.appendChild(newTodo);

  // add todo to localStorage
  saveLocalTodos(todoInput.value);

  //   checkmark button
  const checkBtn = document.createElement('button');
  checkBtn.innerHTML = '<p>&#10004;</p>';
  checkBtn.classList.add('check-btn');
  todoDiv.appendChild(checkBtn);

  //   delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<p>&#10006;</p>';
  deleteBtn.classList.add('delete-btn');

  todoDiv.appendChild(deleteBtn);

  if (todoValue !== '') {
    todoList.appendChild(todoDiv);
  } else {
    alert('Please enter field');
  }

  todoInput.value = '';
}

function deleteList(e) {
  const item = e.target;
  const todoItem = item.parentElement;

  // delete todo
  if (item.classList[0] === 'delete-btn') {
    todoItem.classList.add('add-animation');

    removeLocalTodos(todoItem);
    todoItem.firstChild.innerHTML = 'good bye';

    todoItem.addEventListener('transitionend', function (e) {
      todoItem.remove();
    });
  }

  // save todo
  else if (item.classList[0] === 'check-btn') {
    // console.log(item.nextSibling).remove;
    todoItem.classList.toggle('saveTodo');
  }
}
function todoFilteration(e) {
  var todos = todoList.childNodes;

  todos.forEach(function (todos) {
    switch (e.target.value) {
      case 'all':
        todos.style.display = 'flex';

        break;

      case 'completed':
        if (todos.classList.contains('saveTodo')) {
          // console.log('yes i am working');
          todos.style.display = 'flex';
        } else {
          todos.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!todos.classList.contains('saveTodo')) {
          todos.style.display = 'flex';
        } else {
          todos.style.display = 'none';
        }
    }
  });
}

function saveLocalTodos(todo) {
  let todos = [];
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
  // console.log(todo);
}
function getTodos() {
  let todos;

  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function (todo) {
    // create tododiv
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //   create Li
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todo;
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    //   checkmark button
    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<p>&#10004;</p>';
    checkBtn.classList.add('check-btn');
    todoDiv.appendChild(checkBtn);

    //   delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<p>&#10006;</p>';
    deleteBtn.classList.add('delete-btn');

    todoDiv.appendChild(deleteBtn);

    // if (todo !== '') {
    todoList.appendChild(todoDiv);
    // } else {
    //   alert('fealds are empty');
    // }
  });
}

function removeLocalTodos(todo) {
  let todos;

  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}
