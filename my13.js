function catTalk() {
    "use strict";

    var petName = "lover";
    var quote = petName + " says meow";
    return quote;
}

console.log(catTalk());
function catTalk() {
    "use strict";
    const petName = "lover"; // const behtar hai kyunke naam badal nahi raha
    const quote = `${petName} says meow`; // Yeh likhne ka naya aur asaan tarika hai
    return quote;
}
console.log(catTalk())