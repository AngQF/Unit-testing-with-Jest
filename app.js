// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
// module.exports = { sum, fromEuroToDollar }

const fromDollarToYen = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInEuro * 127.9;
    //return the dollar value
    let val = valueInYen.toFixed(2);
    return parseFloat(val);
}
// module.exports = { fromEuroToDollar, fromDollarToYen }

const fromYenToPound = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInPound = valueInEuro * 0.8;
    //return the dollar value
     let val = valueInPound.toFixed(1);
     return parseFloat(val);
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
