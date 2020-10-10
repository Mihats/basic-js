const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw "Error";

    let result = [];
    label: for (let i = 0; i < arr.length; i++) {

        if (arr[i] === "--discard-prev") {
            if (i > 0) result.pop();
            continue label;
        }
        if (arr[i] === "--discard-next") {
            i += 2;
            continue label;
        }
        if (arr[i] === "--double-next") {
            if (i + 1 < arr.length - 1) result.push(arr[i + 1]);
            continue label;
        }
        if (arr[i] === "--double-prev") {
            if (i > 0) result.push(arr[i - 1]);
            continue label;
        }
        result.push(arr[i]);

    }

    return result;


};