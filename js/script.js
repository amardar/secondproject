// Создаем форму
const userForm = document.querySelector('.user-form');

userForm.addEventListener('submit', (event) => {
  event.preventDefault();
    
  const data = new FormData(event.target);

  addTask(data.get('searchbox'));
 
})

// Добавляем li элемент в форму
function addTask(taskName) {
  console.log(taskName)

  let parentElement = document.querySelector('.task-list');

  let newElement = document.createElement('li');
  
  newElement.innerHTML = `<p>${taskName}<p> <img src="images/circleGray.svg" id="circleGray" alt="фиолетовый-круг">`;

  document.querySelector("ul").style.display="block";

  parentElement.append(newElement);

// Маркировка кружка фиолетовым

document.querySelector('.task-list').addEventListener('mouseover', function (event) {
   
  if (event.target.nodeName === 'IMG'){
    event.target.closest('li').innerHTML = `<p>${taskName}<p> <img src="images/circleFiolet.png" id="circleGray" alt="фиолетовый-круг">`;
  }

})

document.querySelector('.task-list').addEventListener('mouseout', function (event) {
   
  if (event.target.nodeName === 'IMG'){
    event.target.closest('li').innerHTML = `<p>${taskName}<p> <img src="images/circleGray.png" id="circleGray" alt="фиолетовый-круг">`;
  }

})

// Удаляем элемент из формы
document.querySelector('.task-list').addEventListener('click', function (event) {
   
    if (event.target.nodeName === 'IMG'){
      event.target.closest('li').remove()
    }

    if (document.querySelectorAll("li").length === 0) {
      document.querySelector("ul").style.display="none";
    }
    
  })







  }
