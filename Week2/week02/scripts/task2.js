/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = 'Wayne Herridge';
// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myName;
// Step 3: declare and instantiate a variable to hold the current year
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
let myImage = 'images/WHerridge.jpeg';
// Step 6: copy your image into the "images" folder
// Completed as a drag and drop exercise within the folder structure
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#myImage').src = myImage;



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let myFavFoods = ['Indian Curry', ' Pizza', ' Fish and Chips', ' Galaxy Chocolate']
// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = myFavFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
let extraFood = ' Subway';

// Step 4: add the variable holding another favorite food to the favorite food array
myFavFoods.push(extraFood);

// Step 5: repeat Step 2
document.querySelector('#food').textContent = myFavFoods;

// Step 6: remove the first element in the favorite foods array
myFavFoods.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = myFavFoods;

// Step 8: remove the last element in the favorite foods array
myFavFoods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = myFavFoods;
