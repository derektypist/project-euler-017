# Project Euler 017 - Number Letter Counts

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

The aim is to find out how many letters are used if all the numbers from 1 to n (e.g. 1000) inclusive were written out in words.

**NOTE:** Do not include spaces or hyphens.  For example 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.  The use of "and" when writing out numbers is in compliance with British usage.

Information at [Project Euler 017](https://projecteuler.net/problem=17)

## UX

**Getting Started**

Enter a whole number between 1 and 1000000 in the input field and click on the Submit Button.  You will see the number you have entered as well as the number of letters used to write the numbers from 1 to that number, unless you have made an invalid input.  For example, if you entered 5, you would expect to get 19 letters used to write the numbers from 1 to 5.  Click on the Reset Button to clear this information or to start again.

**User Stories**

As a user, I expect to get an error message if I do any of:

- Not enter anything in the input field
- Entering a number less than 1 or greater than 1000000
- Entering text other than a number
- Entering a number, but it is not an integer

As a user, I expect the function `numberLetterCounts(5)` to return a number.

As a user, I expect the function `numberLetterCounts(5)` to return 19.

As a user, I expect the function `numberLetterCounts(150)` to return 1903.

As a user, I expect the function `numberLetterCounts(1000)` to return 21124.

**Information Architecture**

The function `numberLetterCounts(limit)` returns a number, where `limit` is a number between 1 and 1000000.

## Features

Allows the user to enter a number as well as getting the number of letters used to write the numbers from 1 to that number.  Performs checks on valid user input.  If the input is invalid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.0-Beta1 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-017) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)


