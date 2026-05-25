const LOCAL_FORCAST = {
    today: { min: 49, max: 80 },
    tomorrow: { min: 54, max: 90 }
};

function getmaxOFTmrw(forcast) {
    "use strict";

    const { tomorrow: { max: maxOFTomorrow } } = forcast;

    return maxOFTomorrow;
}

console.log(getmaxOFTmrw(LOCAL_FORCAST))