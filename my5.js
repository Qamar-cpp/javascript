var contacts = [
    {
        "firstname" :  "akira",
        "lastname": "laine",
        "number": "48483383",
        "likes": ["pizza", "magic", "brownie points"]
    },
    {
        "firstname" : "harry",
        "lastname": "potter",
        "number": "45344443",
        "likes": ["hogwarts", "magic", "hagrid",]
    },
    {
        "firstname" : "sherlock",
        "lastname": "holmes",
        "number": "4544544533",
        "likes": ["intriguing", "cases", "voilin",]
    },
    {
        "firstname" : "kritian",
        "lastname": "vos",
        "number": "unknown",
        "likes": ["javascript", "gaming", "foxes",]
    }
];
function lookupProfile(name, prop){
    for(var i = 0 ; i < contacts.length; i++){
        if(contacts[i].firstname === name){
          return contacts[i][prop] || "no such property";
        }
    }
    return "no such data contacts";
}
var data = lookupProfile("kritian", "number");
console.log(data);