const refs = {
   "input": document.querySelector("#font-size-control"),
"span": document.querySelector("#text"),

}
 refs.span.style.fontSize = `${refs.input.value}px`;
refs.input.addEventListener("change", () => {
    refs.span.style.fontSize = `${refs.input.value}px`;    
})






// Напиши скрипт, который реагирует на изменение значения
//  input#font - size - control(событие input) 
//  и изменяет инлайн - стиль span#text
//   обновляя свойство font - size.
//   В результате при перетаскивании ползунка будет меняться размер текста.

