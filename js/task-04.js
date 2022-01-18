const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const value = document.querySelector("#value");
console.log(decrementBtn);
console.log(incrementBtn);

// decrementBtn.addEventListener("click", () => {
//     console.log("decrement was clicked")
// });
// incrementBtn.addEventListener("click", (increaseByOne) => {
//     console.log("increment was clicked")
// });


decrementBtn.addEventListener("click", decreaseByOne);
incrementBtn.addEventListener("click", increaseByOne);

let counterValue = 0;


function increaseByOne() {

    counterValue += 1;
    value.textContent = counterValue;  
};
function decreaseByOne() {
    counterValue -= 1;
    value.textContent = counterValue;
}


