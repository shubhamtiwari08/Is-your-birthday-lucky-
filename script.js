const bDate = document.getElementById("B-date")
const luckyNumber = document.querySelector("#luck-number")
const checkButton = document.querySelector("#checknumber")
let result = document.querySelector("#result")



checkButton.addEventListener('click', birthdayLuck)

function compareValue(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        result.innerHTML = "wow your b'day is lucky !"
    } else {
        result.innerHTML = "oops! your bday is not lucky !"
    }
}

//console.log("congrats ! you are a khanki chakka madari")




function birthdayLuck() {
    const bDateValue = bDate.value;
    const sum = calculate(bDateValue)
    compareValue(sum, luckyNumber.value)
}

function calculate(bDateValue) {
    const digitDate = bDateValue.replaceAll("-", "")
    const singleDigit = digitDate.split("")
    let sum = 0
    for (i = 0; i < singleDigit.length; i++) {
        const individualDigit = digitDate[i] % 10
        sum = sum + Number(individualDigit)

    }
    return sum

}

