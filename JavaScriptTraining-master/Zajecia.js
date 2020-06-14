// function fibo(n){
//     console.log("fibo z n = ", n);
//     if(n <= 1){
//         return n;
//     }
//     else {
//         return fibo(n-2) + fibo(n-1);
//     }
// }
// var fibonacci = fibo(5);
// console.log(fibonacci);



// function callBackTest(cb){

//     console.log("ciezkie zdanie");
//     setTimeout(function () {
//         var magicznaLiczba = Math.random() * 1000;
//         cb(magicznaLiczba);

//     }, 5000)
// }

// callBackTest(function(a){

//     console.log("zadnie dobieglo konca", a);

// })


// function callBack(cb){

//     console.log("start");
//     var start = Date.now();
    
//     for(x=0;x<100000;x++){
//         for(y=0;y<20000;y++){}
//     }

//     var koniec = Date.now();
//     cb((koniec - start) / 3600);

// }

// callBack(function(a){

//     console.log("koniec po: " + a + " sekundach");

// })

//Zadanie domowe:
//1. Funkcja ktora przy kazdym wywoalniu pokazuje kolejna wartosc silnii
//2. Funckaj ktora dodaje kolejno podane argumenty
//3. Silnia za pomocą rekurencji



// var tablica =[
//     "ala",
//     "ma",
//     "kota",
//     "milicja",
//     "ma",
//     "pałę"
// ];

// for (let index = 0; index < tablica.length; index++) {
//     console.log(tablica[index]);
// }


// console.log("--------------");


// var krajeKontynenty = [
//     ['Polska', 'Madagaskar', 'Laos'],
//     ['Europa', 'Afryka', 'Azja']
// ];

// console.log(krajeKontynenty[0][0]);
// console.log(krajeKontynenty[0][1]);
// console.log(krajeKontynenty[1][2]);


//Zadanie

//Dwie funkcje - dodajaca i pobierajaca osobe z dziennika
//Dodawanie i pobieranie osoby do klas 1 - 6
//Funkcja 'dodaj osobe' przyjmuje: Numer klasy, imie, nazwisko. Zwraca numer w dzienniku. Dziennik w kolejności alfabatycznej.
//Pobierz osobę - przyjmuje argument numer klasy oraz numer z dziennika


var dziennik = [
    ["Jurek Ogórek", "Wiktor Traktor", "Pat Kot"],
    ["Franciszek II", "Chuck Norris", "Steven Seagal"],
    ["Neil Armstrong", "Louis Armstrong", "Stefan Burczymucha"],
    ["Tom Dom", "Bob Płot", "Mike Like"],
    ["Donald Trump", "Donald Tusk", "Donald Duck"],
    ["Kleopatra", "Myszka Minie", "Ellen Ripley"]
];

//Sortowanie listy każdej z klas i przy okazji wypisanie
for (let index = 0; index < dziennik.length; index++) {
    dziennik[index].sort();
    console.log(dziennik[index]);
}
console.log("-------------");

function dodajOsobe(numerKlasy, imie){

    //Odejmuję, żeby dziennik nie zaczynał się od 0
    numerKlasy = numerKlasy - 1;
    dziennik[numerKlasy].push(imie);
    dziennik[numerKlasy].sort();
    console.log("Dodano ucznia: " + imie + " do klasy numer: " + numerKlasy + ". Jego numer w dzienniku to: " + (dziennik[numerKlasy].indexOf(imie))+1);

    console.log(dziennik[numerKlasy]);

}

dodajOsobe(3, "Elon Musk");

console.log("-------------");

function pobierzOsobe(numerKlasy, numerOsoby){

    //Odejmuję, ponieważ dziennik nie zaczyna się od 0
    numerKlasy = numerKlasy - 1;
    numerOsoby = numerOsoby - 1;
    console.log("Szukana osoba to: ", dziennik[numerKlasy][numerOsoby]);

}   

pobierzOsobe(2,1);

