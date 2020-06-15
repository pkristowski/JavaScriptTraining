
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

const el = document.querySelector('#user');

el.dataset.dateOfBirth = '1960-10-03';

delete el.dataset.dateOfBirth;

el.dataset.someDataAttr = 'kopytko';
