function getCentury(year) {
    // Calculate the century by dividing the year by 100 and rounding up
    return Math.ceil(year / 100);
}

function getDecade(yearNumber) {
    return Math.ceil(yearNumber / 10).toString().slice(-2);

    //Madness
    // var yearString = yearNumber.toString(); // "2024"
    // var decade = 0;
    //
    // var thirdNumberString = yearString[2]; //"2"
    // var thirdNumber = +thirdNumberString; //2
    // var fourthNumberString = yearString[3]; //"4"
    // var fourthNumber = +fourthNumberString;
    //
    // // 2011
    // // если 3 цифра 1 то десятилетие 1 или 2
    // for (let i = 0; i <= 9; i++) {
    //     if (thirdNumber === i) {
    //         if (fourthNumber === 0) {
    //             decade = thirdNumber;
    //         } else {
    //             decade = thirdNumber + 1;
    //         }
    //     }
    // }
    //
    // console.log("decade: " + decade);
    // return decade;
}

function updateTime() {
    // Get the current time
    var now = new Date();

    console.log(now);

    // Format hours, minutes, and seconds with leading zeros
    var yearNumber = now.getFullYear(); //2024

    var decade = getDecade(yearNumber);

    // Example usage
    var century = getCentury(yearNumber);
    console.log("Century:", century); // Output: Century: 21

    var decadePadded = decade.toString().padStart(2, '0');
    var year = now.getFullYear().toString().padStart(4, '0');

    var monthProgramming = now.getMonth();
    var monthHuman = monthProgramming + 1;
    var month = monthHuman.toString().padStart(2, '0');

    var day = now.getDate().toString().padStart(2, '0');
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');

    // Update the time display
    var timeDiv = document.getElementById('time');
    timeDiv.textContent = century + '. ' + decadePadded + '. ' + year + '/' + month + '/' + day + '. ' + hours + ':' + minutes + ':' + seconds;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display the time
updateTime();