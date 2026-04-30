// const sum = (function(){
//     return function sum(...args){
//         return args.reduce((a, b) => a + b, 0);
//     };
// })();
// console.log(sum(1, 2, 3, 5, 89));
const arr1 = ['jan', 'feb', 'march', 'april'];
let arr2;
(function(){
    arr2 = [...arr1];
    arr2[1] = "rice";
    return arr1;
})();
console.log(arr2);
