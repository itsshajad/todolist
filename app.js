// selector
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// eventListiners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteList);

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
  {
  }
  todoDiv.appendChild(deleteBtn);
  todoList.appendChild(todoDiv);

  todoInput.value = '';

  console.log(checkBtn);
  console.log(deleteBtn);
}

function deleteList(e) {
  console.log(e.target);
  const item = e.target;
  if (item.classList[0] === 'delete-btn') {
    item.parentElement.remove();
  }
}
