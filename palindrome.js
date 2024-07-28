const input = document.querySelector("#text-input")
const button = document.querySelector("#check-btn")
const result = document.querySelector("#result");



button.addEventListener("click", () => {
    const replaced = input.value.toLowerCase().replace(/[^a-z0-9]/g,"")
    if (input.value === "") {
        alert("Please input a value")
        result.style.display = "none"
    } else if (input.value.length === 1) {
        result.innerText = `${input.value} is a palindrome`
        result.style.boxShadow = "1px 1px 30px green"
        result.style.display = "block"
    } else if (replaced === replaced.split('').reverse().join('')) {
        result.innerText = `${input.value} is a palindrome`
        result.style.display = "block"
        result.style.boxShadow = "1px 1px 30px green"
    } else if (replaced !== replaced.split('').reverse().join('')) {
        result.innerText = `${input.value} is not a palindrome`
        result.style.display = "block"
        result.style.boxShadow = "1px 1px 30px red"
    }

})  