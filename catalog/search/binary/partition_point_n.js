function partitioned_n(f, n, p) {
    //TODO: pending
    return true;
}

function partition_point_n(f, n, p) {
    //precondition: partitioned_n(f, n, p)

    while (n != 0) {
        var h = half_nonnegative(n);
        var m = successor(f, h);
        if (p(source(m))) {
            n = h;
        } else {
            n -= h + 1;
            f = successor(m);
        }
    }
    return f;
}

function usage() {
    var p = predicate(function greater_than_3(x) { return x > 3; });
    var s = sequence([1, 2, 2, 2, 3, 3, 3, 4, 7, 9, 9], "s", p);

    var pp = partition_point_n(begin(s), size(s), p);
    if ( ! equal(pp, end(s))) {
        print("Partition point value is: " + source(pp));
    } else {
        print("Partition point is out of range");
    }
}

function attributes() {}
