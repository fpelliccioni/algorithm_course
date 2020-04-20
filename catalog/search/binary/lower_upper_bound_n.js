function lower_upper_bound_n(f, n, a, r) {}

function usage() {
    var a = 3;
    var lbp = predicate(function p(x) {return ! (x < 3);});
    var ubp = predicate(function p(x) {return 3 < x;});

    var s = sequence([1, 2, 2, 2, 3, 3, 3, 4, 7, 9, 9], "s", [lbp, ubp]);

    var lb = lower_bound_n(begin(s), size(s), a, lt);
    var ub = upper_bound_n(begin(s), size(s), a, lt);

    var f = begin(s);
    var l = end(s);
    print("elements less than " + a + " are:");
    while ( ! equal(f, lb)) {
        print(source(f));
        f = successor(f);
    }

    var count = 0;
    while ( ! equal(f, ub)) {
        ++count
        f = successor(f);
    }

    print("..., then, there are " + count + " " + a + "s");

    print("elements greater than " + a + " are:");
    while ( ! equal(f, l)) {
        print(source(f));
        f = successor(f);
    }
}

function attributes() {}
