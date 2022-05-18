// Set Up Global Constants

const UNITS = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const TENS = ['','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
const SHORTSCALE = ['','thousand','million','billion','trillion','quadrillion','quintillion'];

// Function to Get Number Information (including invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.toString().length == 0 || num < 1 || num>1e32 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 1 and 100000000000000000000000000000000.`;
    } else {
        txt += `You have entered the number ${num}.<p>`;
        txt += `${numberLetterCounts(num)} letters have been used for writing out these numbers in words.`
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

// Function to Triple in Words 
function tripleInWords([hundreds,tens,ones]) {
    return [hundreds===0 ? '' : UNITS[hundreds] + 'hundred', 10*tens + ones < 20 ? '' : TENS[tens], 10*tens+ones<20 ? UNITS[10*tens+ones] : UNITS[ones]];
}

// Function to Convert Number in Words
function numInWords(num) {
    if (Math.log10(num) > 32) return NaN;
    let numToArray = [];
    let numCopy = num;
    while (numCopy > 0) {
        const triple = numCopy % 1000;
        numCopy = Math.floor(numCopy/1000);
        numToArray.push([Math.floor(triple/100),Math.floor((triple%100)/10), Math.floor(triple%10)]);
    }

    return numToArray.map((triple) => tripleInWords(triple).join('')).map((triple,index) => triple !== '' ? triple + SHORTSCALE[index] : '').join('') + ((num%100 > 0 && num>=100) ? 'and' : '');
}

/*
    Function to return the number of letters used to write all
    letters from 1 to limit
    numberLetterCounts(5) returns 19
    numberLetterCounts(150) returns 1903
    numberLetterCounts(1000) returns 21124
*/
function numberLetterCounts(limit) {
    let numLetters = 0;
    for (let i=1;i<=limit;i++) {
        numLetters += numInWords(i).length;
    }
    return numLetters;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}