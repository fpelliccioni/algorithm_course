function find_with_sentinel(f, l, x) {
    if (equal(f, l)) return f;
    var pl = predecessor(l);
    var pv = source(pl);
    sink(pl, x);

    f = find_unguarded(f, x);
    if (equal(f, pl) && source(f) != pv) {
        f = l
    }

    sink(pl, pv);
    return f;
}

function usage() {
    // var s = sequence([5, 2, 7, 14, 81, 99], "s");
    var s = sequence(array_random(), "s");
    sink(successor(begin(s), size(s) / 2), 99);

    var it = find_with_sentinel(begin(s), end(s), '99');
    if ( ! equal(it, end(s))) {
        print(source(it));
    }
}

function attributes() {}
