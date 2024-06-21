"use strict";
/*
Q63 - Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
*/
;
;
function shapeInfo(kind) {
    if (kind.kind === 'circle') {
        console.log(`The circle : ${kind.radius}: 5`);
    }
    else {
        console.log(`The rectangle : ${kind.length} : ${kind.width}`);
    }
}
shapeInfo({ kind: 'circle', radius: 5 });
shapeInfo({ kind: 'rectangle', length: 5, width: 6 });
