const tempOfTomorrow = {
    tomorrow : 33,
    otherdays : 44
}
function news(tempOfTomorrow){
    "use strict";
   const {tomorrow : tempOfTomorrowValue } = tempOfTomorrow;
   return tempOfTomorrowValue;
}
console.log(news(tempOfTomorrow))

