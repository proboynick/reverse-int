module.exports = function reverse (n) {
    n = Math.abs(n);
    let numbToString = String(n);
    let tmpString = "";
    for (let i = numbToString.length - 1; i >= 0 ; i--) {
        tmpString += numbToString[i];
    }
    return tmpString;
}
