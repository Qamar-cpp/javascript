function checkscope(){
    "use strict";
    let i = "function scope";
    if (true){
        let i = "block scope";
        console.log("block scope = ", i)
    }
    console.log("function scope = ", i)
}
console.log(checkscope())