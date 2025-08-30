import {inventory} from "../constants/inventory.js";

export function tvSold() {
    let sold = 0;

    for (let i = 0; i < Object.keys(inventory).length; i++) {
        let tvSold = inventory[i].sold;

        sold += tvSold;
    }

    return sold;
}