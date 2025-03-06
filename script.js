const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-button");

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

function addResult() {

}

function clearResult() {

}