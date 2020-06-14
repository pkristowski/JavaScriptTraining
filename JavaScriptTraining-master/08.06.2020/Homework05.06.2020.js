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

function sumowanie(){
    let s = 0

    const subsum = function(...a){

        for (let index = 0; index < a.length; index++) {
            s = s + a[index]; 
        }
        console.log(s);
        return subsum;
    }

    return subsum;
}

//Każde wywołanie zwiększa wartość 's' o podane argumenty
let superSum = sumowanie();

superSum(2, 1)(1, 5, 8);

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
