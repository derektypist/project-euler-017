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