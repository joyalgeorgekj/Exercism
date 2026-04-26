// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let result = 0;
  for (let index = 0; index < birdsPerDay.length; index++) {
    result += birdsPerDay[index];
  }
  return result;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let result = 0;
  let weekIndexStart = 7 * (week - 1);
  let weekIndexEnd = (7 * week) <= birdsPerDay.length - 1 ? 7 * week : birdsPerDay.length - 1;
  for (let index = weekIndexStart; index < weekIndexEnd; index++) {
    result += birdsPerDay[index];
  }

  // console.log(birdsPerDay, week, result)
  return result;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let index = 0; index < birdsPerDay.length - 1; index+=2) {
    birdsPerDay[index] = birdsPerDay[index]+1;
  };
}

