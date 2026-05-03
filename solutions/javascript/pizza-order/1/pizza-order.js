/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(total = 0, ...items) {
    const menuItemsRate = {
        extratoppings: 2,
        extrasauce: 1,
        margherita: 7,
        caprese: 9,
        formaggio: 10,
    };
    if (
        typeof total !== "number" &&
        Object.keys(menuItemsRate).includes(total.toLowerCase())
    ) {
        items.push(total);
        total = 0;
    }

    if (items.length <= 0) return total;

    const lastItem = items.pop();
    const lastItemRate = menuItemsRate[lastItem.toLowerCase()] || 0;

    total += lastItemRate;

    return pizzaPrice(total, ...items);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(orders) {
    const menuItemsRate = {
        extratoppings: 2,
        extrasauce: 1,
        margherita: 7,
        caprese: 9,
        formaggio: 10
    };

    return orders.reduce((grandTotal, order) => {
        // 1. Get base price of the pizza
        const pizzaName = order.pizza.toLowerCase();
        const basePrice = menuItemsRate[pizzaName] || 0;

        // 2. Calculate the sum of all extras
        const extrasPrice = order.extras.reduce((extraTotal, extra) => {
            return extraTotal + (menuItemsRate[extra.toLowerCase()] || 0);
        }, 0);

        // 3. Add this pizza's total to the grand total
        return grandTotal + basePrice + extrasPrice;
    }, 0);
}
