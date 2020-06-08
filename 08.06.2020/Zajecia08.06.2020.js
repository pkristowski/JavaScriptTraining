//tabliczka mnozenia

function mnozenie(a,b){

    let tabliczkaX = new Array(a);
    let tabliczkaY = new Array(b);

    for (let index = 0; index < tabliczkaX.length; index++) {
        tabliczkaX[index] = tabliczkaY;
    }
    console.log(tabliczkaX);

    for (let x = 0; x < tabliczkaX.length; x++) {
        for (let y = 0; y < tabliczkaY.length; y++) {
            
            tabliczkaX[x][y] = (x + 1) * (y + 1);
            console.log(x, y);
            console.log((x + 1) * (y + 1));
        }
        
    }

    for (let x = 0; x < tabliczkaX.length; x++) {
        for (let y = 0; y < tabliczkaY.length; y++) {
            
            console.log(tabliczkaX[x][y], x, y);
            
        }
        
    }

    return;
}


mnozenie(3,3);