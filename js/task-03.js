const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");

const markup = images
  .map((el) => `<li class= "item"> 
  <img src="${el.url}" alt="${el.alt}" width = 1260   height = 750></li>`).join("");
  
gallery.insertAdjacentHTML("beforeend", markup);
console.log(gallery);



// const img = document.createElement("img");
// let ul = document.createElement("ul");
// function createImg(object) {
//   for (let i = 0; i < object.length; i += 1) {
    
//     let li = document.createElement("li");
//     let img1 = document.createElement("img");
//     img1.src = object[i].url;
//     img1.alt = object[i].alt;
//     li.append(img1);
//     gallery.appendChild(li);
//     console.dir(li);
//   }
//   return ul;
// }

// console.log(createImg(images));
// console.log(gallery);