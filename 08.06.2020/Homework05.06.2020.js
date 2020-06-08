//Zadanie domowe:


//1. Funkcja ktora przy kazdym wywołaniu pokazuje kolejna wartosc silnii
var start = 0;
var c = 1;
function silnia(){
    
    c = c * (start + 1);
    start++;

    function kolejnaSilnia(){
        return c;
    }

    return kolejnaSilnia;

}

var silnia1 = silnia();

var silnia2 = silnia();

var silnia3 = silnia();

//var silnia4 = silnia();

// var silnia5 = silnia();

console.log("Kolejna wartość silnii: ", silnia1());


console.log("--------------------");

//2. Fukcja ktora dodaje kolejno podane argumenty

var s = 0;
function sumowanie(a) {
    s = s + a;
    function dodaj() {
        return s;
    }
    return dodaj;
}

//Każde wywołanie zwiększa wartość 's' o podany argument
var test1 = sumowanie(6);

var test2 = sumowanie(2);

var test3 = sumowanie(7);

var test4 = sumowanie(0);

console.log("Sumowanie: ", test1());


console.log("-------------------");


//3. Silnia za pomocą rekurencji

function kolejnaSilnia(n){

    if(n <= 1){
        console.log(n);
        return n;
    }
    else{
        var silnia = n * kolejnaSilnia(n - 1); 
        console.log(silnia);
        return silnia;
    }
}
kolejnaSilnia(7);
