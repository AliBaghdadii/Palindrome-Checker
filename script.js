const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

function cleanInputString(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr;
}

function isPalindrome(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] != str[len - i - 1]) {
            return false;
        }
    }
    return true;
}

function addResult(text, isPal) {
    clearResult();
    resultDiv.textContent = isPal ? `${text} is a palindrome` : `${text} is not a palindrome`
}

function clearResult() {
    resultDiv.textContent = "";
}

checkButton.addEventListener("click", function () {
    const inputValue = textInput.value.trim();
    if (inputValue === "") {
        alert("Please input a value");
        return;
    }
    const cleanedStr =  cleanInputString(inputValue);
    addResult(inputValue, isPalindrome(cleanedStr));
});