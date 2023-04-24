// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

const mainNav = document.getElementById('mainNav');
const divElems = document.getElementsByTagName('div');
const cardElems = document.getElementsByClassName('card');

const queryMainNav = document.querySelector('#mainNav');
const queryDivElems = document.querySelectorAll('div');
const queryCardElems = document.querySelectorAll('.card');


// A- finding across the entire DOM
const header = document.querySelector('header');
const logoTitle = document.querySelector('#logoTitle');
const firstCard = document.querySelector('.card:nth-of-type(1)');
// console.log(firstCard)
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img');
const titleFirstCard = firstCard.querySelector('h2');
const subtitleFirstCard = firstCard.querySelector('h3');
const textFirstCard = firstCard.querySelector('p');
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
//6console.log(link1FirstCard)
const link2FirstCard = link1FirstCard.nextElementSibling;


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll('nav a');
console.log(links);
// B- Loop over the links and console.log their text content
// links.forEach(function(link) {
//     console.log(link.textContent)
// })  old syntax

links.forEach(link => console.log(link.textContent));  

//arrow syntax

/* higher order function = function that takes another function
forEach = for(let i = 0; i < links.length;; i++) {
    console.log(links[i])

 }


*/
// C- Turn the collection of links into a real array\
const linksArray = Array.from(links);
//console.log(links, linksArray)
/* console.log(linksArray)
const newArr = [];
for( let i = 0; i < links.length; i++) {
    newArr.push(links[i]);
}
return newArr;

*/
// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeLink = linksArray.find(link => link.textContent === ('Home'));
//console.log(homeLink)
/*             link takes each element out the array  and => if text content equals home itll be returned
find - returns first element that meets the criteria or matches the condition
filter - returns all elements that pass the criteria
map -  make some update to all elements of the array
reduce - reduce the array to a singular value 
*/
// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = "Bloomtech Doggos";
titleFirstCard.textContent = "I is DOGGGG!";
subtitleFirstCard.textContent = "A story in three parts";
textFirstCard.textContent = "Dogs are nice, dogs are kind, stay away from cats";
link2FirstCard.textContent = "Dog Ipsum";
//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes

link1FirstCard.setAttribute('href', 'https://pexels.com/search/dog');

//can be set directly with dot notation:
link2FirstCard.href = 'https://doggoipsum.com';
imageFirstCard.src = 'https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg';
//works on css
logoTitle.className = 'logo heading banana';
//  B- Using .setAttribute to change a few attributes


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add('sky');
header.classList.remove('sky');
//  B- By manipulating inline styles on the element
header.style.fontSize = '2rem';
//setInterval(() =>  header.classList.toggle('sky'), 1000);

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
//create element must be a tag name from an html element
const blogLink = document.createElement('a');
console.log(blogLink)
blogLink.textContent = "Blog";
blogLink.href = '#';
//next line actually adds it to the html document
document.querySelector('nav').appendChild(blogLink);
blogLink.classList.add('menu-item');
// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
/* when you assign firstCard = secondCard it overwrites the initial instance as a copy without any of the stylings of the dom
in order to proerly reassign you must use the cloneNode method built into the dom so that all of the css and additional html attributes tied to the node being copied are available
*/
const secondCard = firstCard.cloneNode(true);
//using query selector allows the copy of the css from .card-group to be assigne to the second card
document.querySelector('.card-group').appendChild(secondCard);
header.remove();
//prepend places at the top
document.body.prepend(header);

//mimicks api data
const data = {
    'contact': {
        'contact-heading' : 'Contact',
        'address' : '123 Way 456 Street Somewhere, USA',
        'phone' : '1 (888) 888-8888',
        'email' : 'sales@greatidea.io',
    }
};

const contactHeading = document.querySelector('.contact-heading');
const address = document.querySelector('.address');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');

contactHeading.textContent = data['contact']['contact-heading']
address.textContent = data['contact']['address']
phone.textContent = data['contact']['phone']
email.textContent = data['contact']['emaily']

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
