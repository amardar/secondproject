

// Создаем форму
const userForm = document.querySelector('.user-form');

userForm.addEventListener('submit', (event) => {
  event.preventDefault();
    
  const data = new FormData(event.target);

  addTask(data.get('searchbox'));
 
});


// Добавляем li элемент в форму
function addTask(taskName) {

  let parentElement = document.querySelector('.task-list');

  let newElement = document.createElement('li');
  
  newElement.innerText = taskName;

  parentElement.append(newElement);

  }
  