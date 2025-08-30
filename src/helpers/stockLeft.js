import {inventory} from "../constants/inventory.js";

export function stockLeft() {
    let stockLeft = 0;

    for (let i =0; i < Object.keys(inventory).length; i++) {
        const tvStock = inventory[i].originalStock;
        const tvSold = inventory[i].sold;

        stockLeft += (tvStock - tvSold);
    }

    return stockLeft;
}