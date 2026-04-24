function array1 (arr){
    var product = 1;
    for(var i = 0 ; i < arr.length; i++){
        // Problem was: you wrote `array1.length`, but `array1` is the function name.
        // You need `arr.length` because `arr` is the actual array parameter.
        for(var j = 0 ; j < arr[i].length; j++)
        {
            product *= arr[i][j];
            // Problem was: you wrote `array1[i].length`, but it should be `arr[i].length`.
        }
    }
    return product;
}
var product = array1([[2, 4],[3, 5],[3, 5, 5]])
console.log(product)
