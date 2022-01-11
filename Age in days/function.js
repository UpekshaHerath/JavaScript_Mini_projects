function ageInDays() {
    var birthYear = prompt('What is your birth year ? ');
    var type = typeof(birthYear);

    if (birthYear === null) {
        alert('bye bye !!'); 
    } else {
        var noOfDays = (2022 - birthYear) * 365;
        if (!isNaN(noOfDays)) {
            var h3 = document.createElement("h3");
            var text = document.createTextNode("Number of days is " + noOfDays);
            h3.setAttribute('id', 'listBeauty');
            h3.appendChild(text);
            var element = document.getElementById("flex-box-result");
            element.appendChild(h3); 
        } else {
            alert('Invalid input');
        }
    }
}

function reset() {
    document.getElementById('listBeauty').remove();
}

