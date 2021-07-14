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
  
  newElement.innerHTML = `<p contenteditable="true">${taskName}</p> <span class="circle plus"></span>`
  
  document.querySelector("ul").style.display="block";

  parentElement.append(newElement);

// Удаляем li элемент из списка
document.querySelector('.task-list').addEventListener('click', function (event) {
   
    if (event.target.nodeName === 'SPAN'){
      event.target.closest('li').remove()
    }

    if (document.querySelectorAll("li").length === 0) {
      document.querySelector("ul").style.display="none";
    }
    
  })
  }

// Очищаем форму
  document.getElementById('form-button').addEventListener('click', function (event) {
   
    event.target.closest('form').reset()
   
   })

   Меняем иконку сортировки при наведении!!!!!

   document.querySelector('.sort-image').addEventListener('mouseover', function (event) {
   
    if (event.target.nodeName === 'IMG'){
      document.querySelector('.sort-image').innerHTML = "" ;
      document.querySelector('.sort-image').innerHTML = '<img src="images/sortSmallBigActive.svg" id="sortSmallBigNotActive" alt="Сортировка">'
    }
  
  })

  // document.querySelector('.sort-image').addEventListener('mouseout', function (event) {
   
  //   if (event.target.nodeName === 'IMG'){
  //     console.log('привет')
  //     document.querySelector('.sort-image').innerHTML = "" ;
  //     document.querySelector('.sort-image').innerHTML = '<img src="images/sortSmallBigNotActive.svg" id="sortSmallBigNotActive" alt="Сортировка">'
  //   }
  
  // })

   // Сортируем форму

  let triger = 0;
  document.getElementById('sortSmallBigNotActive').addEventListener('click', function (event) {
    if (triger === 0) {
      sortListAlphabet(".task-list");
      triger = 1;
    } else {sortListNonAlphabet (".task-list"); triger = 0;}
   })


   function sortListAlphabet(ul) {
    var ul = document.querySelector(ul);
  
    Array.from(ul.getElementsByTagName("LI"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(li => ul.appendChild(li));
  }

  function sortListNonAlphabet(ul) {
    var ul = document.querySelector(ul);
  
    Array.from(ul.getElementsByTagName("LI"))
      .sort((a, b) => b.textContent.localeCompare(a.textContent))
      .forEach(li => ul.appendChild(li));
  }
  
    // При наведении делаем активной