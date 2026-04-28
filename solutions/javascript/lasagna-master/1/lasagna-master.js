/// <reference path="./global.d.ts" />
// @ts-check


/**
 *
 * @param {number} time
 * @returns {string}
*/

export function cookingStatus(time) {
    if (time === 0) return "Lasagna is done.";
    else if (!time) return "You forgot to set the timer.";
    return "Not done, please wait."
}


/**
 * @param {string[]} layers
 * @param {number | undefined} time
 * @returns {number}
 */

export function preparationTime(layers, time) {
    return layers.length * (time ?? 2);
}

/**
 * @param {string[]} layers
 * @returns {Object<string, number>}
 */

export function quantities(layers) {
    let result = {
        sauce: 0,
        noodles: 0
    }

    for (const ingredient of layers) {
        if (ingredient === "sauce") result.sauce += 0.2;
        else if (ingredient === "noodles") result.noodles += 50;
    }

    return result;
}

/**
 * @param {string[]} friendsList
 * @param {string[]} myList
 */

export function addSecretIngredient(friendsList, myList) {

    myList.push(friendsList[friendsList.length - 1]);
}

/**
 * @param {Object<string, number>} recipe
 * @param {number} portion
 * @returns {Object<string, number>}
 */

export function scaleRecipe(recipe, portion) {
    let result = {};

    for (const key of Object.keys(recipe)) {
        result = {...result, [key]: recipe[key] * portion/2};
    }

    return result;
}
