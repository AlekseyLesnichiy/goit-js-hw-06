const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


let ul = document.createElement("ul");
ul.classList.add("ingredients");

function addTextLi(array) {
  for (const el of array) {
    let li = document.createElement("li");
    li.classList.add("item");
    li.textContent = el;
    // console.log(li.textContent);
    ul.append(li);
    // console.log(ul.children);
    
  }
  return ul;
}
console.log(addTextLi(ingredients));

// const markup = ingredients
//   .map((el) => `<li class= "item"> ${el} </li>`).join(" ");

// ul.insertAdjacentHTML("beforeend", markup);
// console.log(ul);



// создать функцию котороя переберет массив и на каждой итерации создаст Li с текстом 
// елемента