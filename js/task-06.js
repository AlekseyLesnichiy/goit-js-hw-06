const input = document.querySelector("#validation-input");

console.log(input.dataset.length);

input.addEventListener("focus", () => { console.log("input in focus") });


input.addEventListener("blur", () => {
    console.log(input.value.length === Number(input.dataset.length));
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.add("valid");
        if (input.classList.contains("invalid")) {
            input.classList.replace("invalid", "valid");
    }
    } else {
        input.classList.add("invalid");
        if (input.classList.contains("valid")) {
             input.classList.replace("valid", "invalid");
        }
    }
    
})

