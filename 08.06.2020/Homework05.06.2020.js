//Zadanie domowe:


//1. Funkcja ktora przy kazdym wywołaniu pokazuje kolejna wartosc silnii

function silnia(){
    let start = 0;
    let c = 1;

    let funkcjaOdSilni = function (){
        
        start = start + 1;
        c = c * start;
        
        console.log(c);
        return c;
    }

    console.log(funkcjaOdSilni());
    return funkcjaOdSilni();
}

let generuj = silnia();
console.log(typeof generuj);

silnia();
silnia();
silnia();

console.log("Kolejna wartość silnii: ", generuj);


console.log("--------------------");

//2. Fukcja ktora dodaje kolejno podane argumenty

function sumowanie(a) {
    let s = 0

    let dodaj = function (){
        
        s = s + a;
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
