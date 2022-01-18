

const categories = document.querySelector("#categories");

function countCategories (categories) {
    console.log(`Number of categories : ${categories.children.length}`);
};
countCategories(categories);

const itemElements = document.querySelectorAll(".item");

console.log(itemElements);


function findTitle (array) {
    for (const el of array) {

        console.log("Category:", el.firstElementChild.textContent);
        console.log("Elements:", el.lastElementChild.children.length);
    }
}

findTitle(itemElements);


// const title = document.querySelector(".item > h2");
// const ulInItem = document.querySelector(".item > ul");

// console.log(title);
// console.log(ulInItem);










// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения