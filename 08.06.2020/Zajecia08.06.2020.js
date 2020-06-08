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



var a = {
    pole:12,
}

b = a;
console.log(a.pole, b.pole);
b.pole= "janek";
console.log(a.pole, b.pole);    