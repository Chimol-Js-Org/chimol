function diff() {
    var diff=0;
    for (var i=0;i<arguments.length;i++) {
        diff -= arguments[i];
    }
    return diff;
}

module.exports = diff;