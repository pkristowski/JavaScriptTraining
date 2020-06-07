//Funkcja mnożąca dwie liczby
var mnozenie = function(x, y){

    return x + " razy " + y + " równa się: " + x * y;

}

let wynik = mnozenie(2,3)
console.log(wynik);


//Funkcja sprawdzająca przystośc

var parzysta = function(x){

    if (x%2 == 0){
        return "Liczba " + x + " jest parzysta";
    }
    else{
        return "Liczba " + x + " nie jest parzysta";
    }

}

console.log(parzysta(5));


//Funkcja dodajaca downolna ilosc argumentow

var dodawanie = function(...dodaj){

    var wynik = 0;
    for (x = 0; x < dodaj.length; x++){

        wynik = wynik + dodaj[x];

    }
    return wynik;

}

console.log(dodawanie(130, 30, 5));


//Funkcja wypisujaca wszystkie parzyste

var wszystkieParzyste = function(...liczby){

    for (x = 0; x < liczby.length; x++){

        if (liczby[x]%2 == 0){
           
            if(parzyste == undefined){
                var parzyste = liczby[x];
            }
            else{
            var parzyste = parzyste + ", " + liczby[x];
            }
            
        }

    }
    return parzyste;

}

console.log(wszystkieParzyste(1, 2, 4, 5, 8, 12, 15, 20));