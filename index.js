function receivesAFunction(callback) {
    return callback();
}


function returnsANamedFunction() {
    return function myfunk(){
    }
}

function returnsAnAnonymousFunction() {
    return function(){
    }
}