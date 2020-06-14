// //tabliczka mnozenia

// function mnozenie(a,b){

//     var tabliczka = [];
//     for (var i =1; i <= a; i++){

//         var wiersz = [];
//         for (var j =1; j <=b; j++){

//             wiersz.push(i * j);

//         }

//         tabliczka.push(wiersz);

//     }

//     return tabliczka;

// }

// var tab = mnozenie(3,3);
// console.log(tab);
// console.table(tab);



//
//Homework 08.06.2020 
//Dziennik uczniów ale obiektami i liczący średnią
//


//this - wskazuje na aktualny kontekts. Funckję która go uruchomiła

// const zeZmiennej = "milicja ma pałę";
// const mojObiekt = {
//     aaa: "ala ma kota",
//     bbb: 12+13,
//     innyObiekt: {
//         a: 'czesc',
//         b: 'uszanowanko',
//     },
//     dajMiA: function () {
//         console.log(this);
//     }
// }

// function fajnaFunkcja() {
//     console.log(this);
// }
// fajnaFunkcja();


// mojObiekt.dajMiA();
// console.log(mojObiekt.bbb);
// console.log(mojObiekt.tablica);
// console.log(mojObiekt.innyObiekt.b);



// var a = {
//     pole:12,
// }

// b = a;
// console.log(a.pole, b.pole);
// b.pole= "janek";
// console.log(a.pole, b.pole);    



var Human = {

    imie: "Edek",
    nazwisko: "Kredek",
    dataUrodzenia: "01.01.1984",
    płeć: "Boy",
    pesel: "13374202465",
    adres: {
        ulica: "Obi-Wana Kenobiego",
        numer: "17",
        miasto: "Kalisz",
    },
    introduce: function(a, b){
        Human.imie = a;
        Human.nazwisko= b;
    },
    whereIFrom: function(){
        console.log("Jestem z miasta " + Human.adres.miasto + " ulica " + Human.adres.ulica + " numer " + Human.adres.numer);
    },
};

console.log(Human);
console.log(Human.adres);
Human.introduce("Chuck", "Norris");
console.log(Human);
Human.whereIFrom();


function HumanV2(name, surname, ulica){
    this.name = name;
    this.surname = surname;
    this.introduce = function(){
        console.log(this.name, this.surname, this.ulica);
    },
    this.ulica = ulica
    this.count = function(){
        console.log(this);
    }
}

//Undefined
//console.log(me.ulica);

//Nie działa bez prototype
HumanV2.printAddress = function(){
    console.log(this.ulica);
}

//Prototype dodaje do aktualnie istniejacych obiektów
HumanV2.prototype.printAddress = function(){
    console.log(this.ulica);
}

var me = new HumanV2("Marek", "Barek", "Łokietka");
me.introduce();
me.printAddress();
var you = new HumanV2("Elon", "Musk");
you.introduce();



function Laptop(brand, cpu, ram, disc, touch, year, battery){
    this.brand = brand;
    this.cpu = cpu;
    this.setRam = function(){
        if (cpu == "i7"){
            this.ram = "8GB";
        }
        else{
            this.ram = "4GB";
        }
    },
    this.disc = disc;
    this.touch = touch;
    this.year = year;
    this.setBattery = function

}


//Zadanie przerób Human na prototype
// Przygotuj inny obiektz wykorzystaniem prototype, 5 pól, 5 metod