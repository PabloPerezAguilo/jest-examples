module.exports.sum = (a, b) => {
    if (isNaN(parseFloat(a)) || isNaN(parseFloat(b))) return NaN;
    return parseFloat(a) + parseFloat(b);
};
