function lower_bound_n(f, n, a, r) {
    var p = predicate(function p(x) {
        return ! r(x, a);
    });
    return partition_point_n(f, n, p);
}

function usage() {
    var s = sequence([1, 2, 2, 2, 3, 3, 3, 4, 7, 9, 9], "s");

    var lb = lower_bound_n(begin(s), size(s), 3, lt);
    if ( ! equal(lb, end(s)) && source(lb) == 3) {
        print("Element found");
    } else {
        print("Element not found, but we have the insertion point in lb");
    }
}

function attributes() {}
