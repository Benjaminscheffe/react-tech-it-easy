//Opdracht 1

import {inventory} from "../constants/inventory.js";

export function sportTv(object) {
    const newArray = object.map((item)=> ({ name: item.type, suitable: item.refreshRate >= 100}));

    //console.log(newArray);

    return newArray
}

export function soldOut(object) {
    const newArray = object.filter((item)=> item.originalStock === item.sold);

    //console.log(newArray);

    return newArray
}

export function findTv(object, name) {
    const newArray = object.find((item)=> item.type === name);

    //console.log(newArray);

    return newArray
}

export function largeTv(object) {
    const newArray = object.filter((item)=> item.availableSizes.some(el=>el>=65));

    console.log(newArray);

    return newArray
}

export function ambiLight(object) {
    const newArray = object.filter((item)=> item.options[4].applicable === true);

    console.log(newArray);

    return newArray
}



// Opdracht 2

export function allTvs(object) {
    const newArray = object.map((item)=>item.brand);

    //console.log(newArray);

    return newArray;
}




