/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let name = 'Wayne Herridge';
console.log(name);
// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = name;
// Step 3: declare and instantiate a variable to hold the current year
let currentDate = new Date();
console.log(currentDate);

let currentYear = currentDate.getFullYear();
console.log(currentYear);

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
let myImage = 'images/WHerridge.jpg'

// Step 6: copy your image into the "images" folder


// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#myImage').src = myImage;



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods


// Step 2: place the values of the favorite foods variable into the HTML file


// Step 3: declare and instantiate a variable to hold another favorite food


// Step 4: add the variable holding another favorite food to the favorite food array


// Step 5: repeat Step 2


// Step 6: remove the first element in the favorite foods array


// Step 7: repeat Step 2


// Step 8: remove the last element in the favorite foods array


// Step 7: repeat Step 2