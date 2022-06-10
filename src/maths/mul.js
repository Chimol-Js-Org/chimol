function mul() {
    var mul=1;
    for (var i=0;i<arguments.length;i++) {
        mul *= arguments[i];
    }
    return mul;
}

module.exports = mul;