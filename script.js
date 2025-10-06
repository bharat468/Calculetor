let button = document.querySelectorAll("button")
let opretor = document.querySelector(".opretor")
let equl = document.querySelector(".equl")
let input = document.querySelector("input");
let dele = document.querySelector(".dele");



let string = ''
button.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string

        }
        else if (e.target.innerHTML == "AC") {
            string = ""
            input.value = string
        }
        else if(e.target.innerHTML == "="){
            input.value = eval(string)
        }
        else {
            string += e.target.innerHTML
            input.value = string
        }
        console.log(e.target.innerHTML);
    })
})


