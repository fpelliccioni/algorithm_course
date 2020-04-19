function upper_bound(f, l, a, r) {
    //TODO: pending, see upper_bound_n
}

function usage() {
    var s = sequence([1, 2, 2, 2, 3, 3, 3, 4, 7, 9, 9], "s");

    var ub = upper_bound(begin(s), end(s), 3, lt);
    print("Upper bound: " + source(ub));
}

function attributes() {}
