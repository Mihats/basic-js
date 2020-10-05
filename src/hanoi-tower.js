const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

    let kolTurns = 2 ** disksNumber - 1;

    return {
        turns: kolTurns,
        seconds: Math.floor(kolTurns / (turnsSpeed / 3600))
    };
};