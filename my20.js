const increment = (function () {
    "use strict";

    return function increment(num, value = 5) {
        return num + value;
    };
})();

console.log(increment(4, 5));
console.log(increment(6));

