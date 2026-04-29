function freezeobj(){
    "use strict";
    const Math_CONSTANTS = {
        PI : 3.14
    };
    Object.freeze(Math_CONSTANTS);
    try {
       Math_CONSTANTS.PI = 97;
    }
    catch(ex){
        console.log(ex)
    }
    return Math_CONSTANTS.PI;
}
const PI = freezeobj();
console.log(PI)