function array(){
let myarray = [3, 5, 6, 7];
let product = 1;
for(var i = 0 ; i < myarray.length; i++){
    product = product * myarray[i];
}
return product;
}

console.log(array())
// Ghalat code examples:
// return myarray.length;
// console.log(myarray);
// console.log(array.myarray);
// var array = myarray.length[i];
