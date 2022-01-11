var count = 0;
var savingString = "Previous counts";

const countingValue = document.getElementById('count');
const previousEntries = document.getElementById('previousEntries');


function increment() {
    count++;
    countingValue.innerText = count;
}

function decrement() {
    if (count <= 0) {
        countingValue.innerText = count;
    } else {
        count--;
        countingValue.innerText = count;
    }
}    
    
function save() {
    savingString += " - " + count;
    previousEntries.innerText = savingString;
    count = 0;
    countingValue.textContent = 0;
}