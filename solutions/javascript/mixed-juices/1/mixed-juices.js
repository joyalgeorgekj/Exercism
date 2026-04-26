// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    switch (name) {
        case "Pure Strawberry Joy":
            return 0.5;
        case "Energizer":
            return 1.5;
        case "Green Garden":
            return 1.5;
        case "Tropical Island":
            return 3;
        case "All or Nothing":
            return 5;
        default:
            return 2.5;
    }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
    let track = 0;
    let index = 0;

    while (wedgesNeeded > 0 && index < limes.length) {
        switch (limes[index]) {
            case "small":
                wedgesNeeded -= 6;
                break;
            case "medium":
                wedgesNeeded -= 8;
                break;
            case "large":
                wedgesNeeded -= 10;
                break;
            default:
                console.log(`limes[${index}] is not right :: ${limes[index]}`);
                break;
        }
        track += 1;
        index += 1;
    }

    return track;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
    let index = 0;
    while (index < orders.length && timeLeft > 0) {
        timeLeft -= timeToMixJuice(orders[index]);
        index += 1;
    }
    return orders.slice(index);
}

