function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  "boxes": document.querySelector("#boxes"),
  "btnCreate": document.querySelector(`[data-create]`),
  "btnDestroy": document.querySelector(`[data-destroy]`)

}

refs.btnCreate.addEventListener('click', getAmount);
refs.btnDestroy.addEventListener('click', destroyBoxes);

function getAmount() {
  let amount = document.querySelector('#controls input').value;

  createBoxes(amount);
  document.querySelector("#controls input").value = 0;
}
let basicSize = 30;
let counter = 0;

function createBoxes(amount) {
  
  let fragment = document.createDocumentFragment();
  
  for (let i = 0; i < amount; i+= 1) {
    let size = basicSize + i * 10;
    let div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    fragment.appendChild(div);
    console.log("size", size);
  }
 
  counter += Number(amount);
  console.log("counter", counter);
  basicSize = 30 + (counter * 10);
  
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  basicSize = 30;
  counter = 0;
}






// Создай функцию createBoxes(amount),
//   которая принимает один параметр - число.
//   Функция создает столько < div >,
//   сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.





// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//   тем самым удаляя все созданные элементы.