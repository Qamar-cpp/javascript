// const myConcate = (arr1, arr2) => arr1.concat(arr2);

// console.log(myConcate([1, 4],[3, 4, 6]));

const realNumberArray = [4.3, 544, 5.34, 3.14, 0.45, 65];
const squarelist = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
return squaredIntegers;
};
const squaredIntegers = squarelist(realNumberArray);
console.log(squaredIntegers);