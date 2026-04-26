//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, position) => {
    let needed = position.toString().split("");
    let numeral = "";
    if (needed[needed.length - 1] === "1" && needed[needed.length - 2] !== "1")
        numeral = "st";
    else if (
        needed[needed.length - 1] === "2" &&
        needed[needed.length - 2] !== "1"
    )
        numeral = "nd";
    else if (
        needed[needed.length - 1] === "3" &&
        needed[needed.length - 2] !== "1"
    )
        numeral = "rd";
    else numeral = "th";

    return `${name}, you are the ${position}${numeral} customer we serve today. Thank you!`;
};
