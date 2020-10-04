const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (!isFinite(+sampleActivity) || typeof sampleActivity !== "string" || sampleActivity === "" || sampleActivity === " " || +sampleActivity > 15 || +sampleActivity <= 0) return false;
    return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / 1.22e-4);
};