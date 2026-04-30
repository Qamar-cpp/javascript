var voxel = {x : 3.3, y : 3.2, z : 3.1};
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const {x : a, y : b, z : c} = voxel;

const AVG_TEMPERATURES = {
    today  : 77,
    tomorrow : 45
};
function getTempOFTmrw(avgTemeratures){
    "use strict";
    
    const {tomorrow : tempOfTomorrow} = avgTemeratures ;

    return tempOfTomorrow;
}

console.log(getTempOFTmrw(AVG_TEMPERATURES));