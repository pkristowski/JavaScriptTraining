
// var querySelector = document.querySelector('.element');
// var queryAll = document.querySelectorAll('.element');

// console.log(querySelector);
// console.log(queryAll);


// var container = document.createElement('div');
// for (var i = 0; i < 10; i++) {
//     var akapit = document.createElement('p');
//     akapit.appendChild(document.createTextNode('Linia ' + (i + 1)));
//     container.appendChild(akapit);
// }
// document.body.appendChild(container);



// document.body.innerHTML = `
// <div class="element">
//     <span>test</span>
// <div>
// `;
// console.log(document.querySelector('.element'));

// const divElement = document.createElement("div");

// const el = document.querySelector('#user');

// //wszystko po date- w HTML zostaje zmienione na camel case
// el.dataset.dateOfBirth = '1960-10-03';

// delete el.dataset.dateOfBirth;

// el.dataset.someDataAttr = 'kopytko';


// el.style.cssText = "color: blue; border: 2px solid black";

// el.setAttribute("style", "color:red; border: 1px solid blue;");

// el.style.color = "blue"

// //console.log(window.getComputedStyle(document.querySelector(".test")));

// var element = document.querySelector('#elem');

// function onClick(event){
//     console.log('Nastapiło click', event);
// }

// element.addEventListener('click', onClick);

// //el.removeEventListener('click', onClick);


//Dodanie 5 przycisków z wykorzystaniem JS
var container = document.createElement('div');
for (var i = 0; i < 5; i++) {
    var akapit = document.createElement('button');
    akapit.appendChild(document.createTextNode('Guzior ' + (i + 1)));
    container.appendChild(akapit);
}
document.body.appendChild(container);

//Div 100px na 100px, ktory zmienia swoj kolor co jakis czas
const element = document.querySelector('#kolorowy');
element.style.cssText = "height:100px; width:100px; border: 2px solid black; background-color:white" ;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

setInterval(function () {
            element.style.cssText = "height:100px; width:100px; border: 2px solid black; background-color:" + getRandomColor();
    }, 2000)


//Zmień 1, 3 i ostatni element za pomoca JS

var queryAll = document.querySelectorAll('.element');

console.log(queryAll);
queryAll[0].style.backgroundColor = 'lightblue';
queryAll[2].style.backgroundColor = 'darkred';
queryAll[queryAll.length - 1].style.backgroundColor = 'green';

