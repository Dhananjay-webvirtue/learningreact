function add(x, y) {
    return x + y;
}

function subtract(x,y) {
    return x-y;
}

function multiply(x,y) {
    return x*y;
}

function divide(x, y) {
    if(valdate) {
        return (y === 0) ? 0 : x / y;
    }
}
function valdate(x,y){
    var numX = x;
    var numY = y
    if(numX != '' && numY != '')
    {
        return true
    }
    if(numX != 0 && numY != 0)
    {
        return true
    }
    /*if(numX !=parseInt(numX) && numY !=parseInt(numY) )
    {
        return true
    }*/
    if(numX !=parseFloat(numX) && numY !=parseFloat(numY) )
    {
        return true
    }
    if(numX > 0 && numY > 0) {
        return true
    }
    if(parseInt(numX) && parseInt(numY)){
        return true
    }
}
