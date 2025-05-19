import {inventory} from "../constants/inventory.js";

export function inventoryHistory() {
    let originalTotalStock = 0;

    for (let i = 0; i < Object.keys(inventory).length; i++) {
        let originalStock = inventory[i].originalStock;

        originalTotalStock += originalStock;
    }

    return originalTotalStock;
}