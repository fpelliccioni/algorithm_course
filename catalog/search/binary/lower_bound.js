function lower_bound(f, l, a, r) {
    //TODO: pending see lower_bound_n
}

function usage() {
    var s = sequence([1, 2, 2, 2, 3, 3, 3, 4, 7, 9, 9], "s");

    var lb = lower_bound(begin(s), end(s), 3, lt);
    if ( ! equal(lb, end(s)) && source(lb) == 3) {
        print("Element found");
    } else {
        print("Element not found, but we have the insertion point in lb");
    }
}

function attributes() {}
