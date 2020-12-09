// selector
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterTodo = document.querySelector('.filter-todo');

// eventListiners
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
  newTodo.innerText = todoValue;
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

  if (todoValue !== '') {
    todoList.appendChild(todoDiv);
  } else {
    alert('Please enter field');
  }

  todoInput.value = '';
}

function deleteList(e) {
  const item = e.target;
  if (item.classList[0] === 'delete-btn') {
    const todoItem = item.parentElement;
    todoItem.classList.add('add-animation');

    todoItem.firstChild.innerHTML = 'good bye';

    todoItem.addEventListener('transitionend', function (e) {
      todoItem.remove();
    });
  }
}
function todoFilteration() {
  console.log(todoList.childNodes);
}
