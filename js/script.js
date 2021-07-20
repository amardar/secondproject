// Создаем форму
const userForm = document.querySelector('.user-form');

userForm.addEventListener('submit', (event) => {
  event.preventDefault();
    
  const data = new FormData(event.target);

  addTask(data.get('searchbox'));
 
})

// Добавляем li элемент в форму
function addTask(taskName) {
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
// Меняем иконку при наведении

// Тут не могу разобраться как эти иконки правильно переключать?????

const image = document.querySelector('.sort-image img');

var imageTrigger = 0;

image.addEventListener('click', mouseClick);

if (imageTrigger === 0) {
  image.addEventListener('mouseover', mouseOver);
  image.addEventListener('mouseout', mouseOut);

} else {
  image.addEventListener('mouseover', mouseOver2);


}



function mouseOver(event) {
  image.src = 'images/sortSmallBigActive.svg';
}

function mouseOut(event) {
  // Я бы сделал через css, но в данном случае можно imageTrigger назначить 4 состояния
  // 1 -  одна иконка
  // 2 - вторая
  // 3 - третья и пр
  // То есть иконка для каждого случая состояния
  if(!imageTrigger === 1) {
    image.src = 'images/sortSmallBigNotActive.svg'; 
  }
}

function mouseClick(event) {
  image.src = 'images/SortBigSmallNotActive.svg';
  imageTrigger = 1;
  console.log(imageTrigger);
}

function mouseOver2(event) {
  image.src = 'images/sortBigSmallActive.svg';
  console.log("ghbddd")
}



   // Сортируем форму

  let triger = 0;
  document.getElementById('sortSmallBigNotActive').addEventListener('click', function (event) {
    if (triger === 0) {
      sortListAlphabet(".task-list");
      triger = 1;

    } else {
      sortListNonAlphabet (".task-list"); 

      triger = 0;
    }
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


  


    // const elem = document.querySelector('button');

    //     ['click', 'mouseover'].forEach(eventType => {
    //         if (eventType === 'click') {
    //             elem.addEventListener(eventType, () => console.log('Click'));
    //         } else {
    //             elem.addEventListener(eventType, () => console.log('mouseover'));
    //         }
    //     })


        ////////////////////////////////////////

