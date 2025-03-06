const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

function cleanInputString(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

function isPalindrome(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]) {
            return false;
        }
    }
    return true;
}

function addResult(originalText, isPal) {
    clearResult();
    resultDiv.classList.remove("hidden");
    resultDiv.textContent = isPal ? `${originalText} is a palindrome` : `${originalText} is not a palindrome`;
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

    const cleanedStr = cleanInputString(inputValue);
    
    if (cleanedStr === "") {
        alert("Please enter at least one valid character (letters or numbers).");
        return;
    }

    addResult(inputValue, isPalindrome(cleanedStr));
});
