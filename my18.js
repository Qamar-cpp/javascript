function freezeobj(){
    "use strict";
    const Math_CONSTANTS = {
        GRAVITY : "9.8",
        SQRT2 : "1.5345",
        E : "2.718"
    }
    Object.freeze(Math_CONSTANTS)
    return Math_CONSTANTS;
}
const math = freezeobj();
console.log(math.E)
console.log(math.GRAVITY)