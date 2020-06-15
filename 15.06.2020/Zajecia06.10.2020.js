//Class

// class Human {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     sayYourName() {
//         console.log(`Mam na imie ${this.name} a 
//         na 
//         nazwisko ${this.surname}`);
//     }

//     //Działa niczym funkcja, może coś robić ale jest uzywane jako zwykła zmienna
//     get mamNaImie() {
//         return this.name;
//     }

//     static sayHi(name) {
//         console.log("cześć!", name);
//     }

//     metoda() {
//         this.sayYourName();
//     }

// }

// class HumanV2 extends Human {
//     sayYourName() {
//         console.log(`Jestem ${this.name}`);
//     }
// }

// const jarek = new Human('Jarek', 'Wąsiasty');
// const andrzej = new HumanV2('Andrzej', 'Spock');

// jarek.sayYourName();
// console.log(jarek.mamNaImie);
// jarek.metoda();

// andrzej.sayYourName();
// console.log(andrzej.mamNaImie);

//---------------------

// function test() {
//     console.log(this.name);
//     console.log(this.arg1, this.arg2);
// }

// test();

// const newTest = test.bind(
//     { name: 'super',
//     arg1: 'arg1',
//     arg2: 'arg2' }
// );

// newTest();

//------------------

// function test() {
//     console.log(this.name);
//     return this.name;
// }

// test();


// let newTest = test.bind(
//     {
//         name: 'ala'
//     }
// );

// newTest();

//------------------

// function sum(a, b) {
//     console.log(a + b);
//     return a + b;
// }

// //Zawsze pierwszy bo to jest 'this'
// let sum10 = sum.bind({}, 10);
// let sum20 = sum.bind({}, 20);
// let sum7 = sum.bind({}, 7);

// sum10(15);
// sum20(11);
// sum7();

//--------------

// var handler = setInterval(function () {
//     var i = 0;
//     while (i <= 100) {
//         console.log("A");
//         i++;
//     }
// }, 1000)

// //To zatrzymuje
// clearInterval(handler)


// var handler = setTimeout(function () {
//     var i = 0;
//     while (i <= 100) {
//         console.log("A");
//         i++;
//     }
// }, 100)

// //To zatrzymuje
// clearTimeout(handler)

//-------------


class Samochod {

    constructor() {
                this.handler = null;
            }

    startEngine() {
       this.handler = setInterval(function () {
            var i = 0;
            while (i <= 100) {
                console.log("Wrrrrr");
                i++;
            }
        }, 1000)
    }

    stopEngine() {
        clearInterval(this.handler)    
    }
}



const fiat = new Samochod();

// fiat.startEngine();
console.log("stop");
// fiat.stopEngine();


//0 do n parzyste
function parzyste(n) {
    for (let x = 0; x <= n; x++) {
        if(x%2 == 0){
            console.log(x);
        }
    }
}

// parzyste(58);


//Wpisane parametry do tablicy 2d kolumnami
function doTablicy(...rest){
    
    //jeśli podano nieparzystą liczbę elementów dodaj jeden pusty
    if(rest.length%2 != 0){
        rest.push("");
    }

    //towrzymy pustą tablicę 2d o potrzebym rozmiarze
    var a = rest.length/2;
    var tabliczka = [];
    for (var i = 1; i <= a; i++){
        var wiersz = [];
        for (var j = 1; j <= 2; j++){
            wiersz.push("");
        }
        tabliczka.push(wiersz);
    }

    //wypełniamy pierwszą kolumnę
    var licznik = null;
    for (var k = 0; k < rest.length/2; k++) {
        tabliczka[k][0] = rest[k];
        licznik = k;
    }
    
    //wypełniamy drugą kolumnę
    licznik = licznik + 1;
    for (var l = 0; l < rest.length/2; l++) {
        tabliczka[l][1] = rest[licznik];
        licznik++;
    }

    return tabliczka;

}

var tablica = doTablicy(1,2,3,4,5,6,7,8,9,10,11);
console.table(tablica);


//Funckja wyswietlajaca n-ty wyraz ciagu
function ciag(n){

    if (n == 0){
        return 1;
    }
    if (n == 1){
        return 2;
    }
    if (n == 2){
        return 3;
    }
    else{
        return ((ciag(n-1)*n + ciag(n-2))/ciag(n-3));
    }

}

var ciagutka = ciag(12);
console.log("Ciąg: ", ciagutka);


//Funkcja do dodania i wyświetlenia osoby
var tablicaObiektow = [ {name:'jarek', surname:'wul', id:1},{name:'Andrzej', surname:'Kopio', id:23}];

function dodajOsobe(a, b, c){

    tablicaObiektow.push({name: b, surname: c, id: a});
    console.table(tablicaObiektow);
}

dodajOsobe(5, 'Irek', 'Maczuga');

function usunOsobe(a){

    for (let index = 0; index < tablicaObiektow.length; index++) {
        if (tablicaObiektow[index].id == a){
            tablicaObiektow.splice(index);
        } 
    }
    console.table(tablicaObiektow);

}

usunOsobe(23);


function wyswietl(){

    console.log("Tablica:");
    console.table(tablicaObiektow);

}

wyswietl();


//Obiekt z 5 sekundowym alertem

class Alert {

    constructor() {
                this.handler = null;
                this.czas = null;
                this.id = null;
                this.array = [];
            }

    wyswietlAlert(id, tekst, czas) {
       this.id = setInterval(function () {
          alert(tekst)
        }, 1000 * czas)
        array[id] = handler;
        console.log(id);
    }

    anulujAlert() {
        clearInterval(this.array[this.id]);    
    }
}

var uwaga = new Alert();
// uwaga.wyswietlAlert(1, "Cuidado! Llamas!", 5);
uwaga.anulujAlert;






