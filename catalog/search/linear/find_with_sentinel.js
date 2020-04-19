function find_with_sentinel(f, l, x) {
    if (equal(f, l)) return f;
        
    var tmp = source(predecessor(l));
    sink(predecessor(l), x);

    f = find_unguarded(f, x);

    sink(predecessor(l), tmp);
    if (equal(successor(f), l) && tmp != x) {
        f = successor(f)
    }
    return f;
}

function usage() {
    var s = sequence(array_random(), "s");

    var it = find_with_sentinel(begin(s), end(s), 99);
    if ( ! equal(it, end(s))) {
        print(source(it));
    } else {
        print("element not found.")
    }
}

function attributes() {}
