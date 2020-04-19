function __catalog() {
return {lower_bound: [ 'search/binary', 'https://github.com/fpelliccioni/algorithm_course/blob/master/catalog/search/binary/lower_bound.js' ],
lower_bound_n: [ 'search/binary', 'https://github.com/fpelliccioni/algorithm_course/blob/master/catalog/search/binary/lower_bound_n.js' ],
lower_upper_bound_n: [ 'search/binary', 'https://github.com/fpelliccioni/algorithm_course/blob/master/catalog/search/binary/lower_upper_bound_n.js' ],
partition_point_n: [ 'search/binary', 'https://github.com/fpelliccioni/algorithm_course/blob/master/catalog/search/binary/partition_point_n.js' ],
partitioned: [ 'search/binary', 'https://github.com/fpelliccioni/algorithm_course/blob/master/catalog/search/binary/partitioned.js' ],
partitioned_n: [ 'search/binary', 'https://github.com/fpelliccioni/algorithm_course/blob/master/catalog/search/binary/partitioned_n.js' ],
upper_bound: [ 'search/binary', 'https://github.com/fpelliccioni/algorithm_course/blob/master/catalog/search/binary/upper_bound.js' ],
upper_bound_n: [ 'search/binary', 'https://github.com/fpelliccioni/algorithm_course/blob/master/catalog/search/binary/upper_bound_n.js' ],
find: [ 'search/linear', 'https://github.com/fpelliccioni/algorithm_course/blob/master/catalog/search/linear/find.js' ],
find_if: [ 'search/linear', 'https://github.com/fpelliccioni/algorithm_course/blob/master/catalog/search/linear/find_if.js' ],
find_unguarded: [ 'search/linear', 'https://github.com/fpelliccioni/algorithm_course/blob/master/catalog/search/linear/find_unguarded.js' ],
find_with_sentinel: [ 'search/linear', 'https://github.com/fpelliccioni/algorithm_course/blob/master/catalog/search/linear/find_with_sentinel.js' ],
max: [ 'selection', 'https://github.com/fpelliccioni/algorithm_course/blob/master/catalog/selection/max.js' ],
max_element: [ 'selection', 'https://github.com/fpelliccioni/algorithm_course/blob/master/catalog/selection/max_element.js' ],
min: [ 'selection', 'https://github.com/fpelliccioni/algorithm_course/blob/master/catalog/selection/min.js' ],
min_element: [ 'selection', 'https://github.com/fpelliccioni/algorithm_course/blob/master/catalog/selection/min_element.js' ],
minmax_element: [ 'selection', 'https://github.com/fpelliccioni/algorithm_course/blob/master/catalog/selection/minmax_element.js' ],
};}

function __lower_bound_usage() {
    var s = sequence([1, 2, 2, 2, 3, 3, 3, 4, 7, 9, 9], "s");

    var lb = lower_bound(begin(s), end(s), 3, lt);
    if ( ! equal(lb, end(s)) && source(lb) == 3) {
        print("Element found");
    } else {
        print("Element not found, but we have the insertion point in lb");
    }
}

function __lower_bound_attributes() {}

function __lower_bound_n_usage() {
    var s = sequence([1, 2, 2, 2, 3, 3, 3, 4, 7, 9, 9], "s");

    var lb = lower_bound_n(begin(s), size(s), 3, lt);
    if ( ! equal(lb, end(s)) && source(lb) == 3) {
        print("Element found");
    } else {
        print("Element not found, but we have the insertion point in lb");
    }
}

function __lower_bound_n_attributes() {}

function __lower_upper_bound_n_usage() {
    var a = 3;
    var lbp = predicate(function p(x) {return ! r(x, a);});
    var ubp = predicate(function p(x) {return r(a, x);});

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

function __lower_upper_bound_n_attributes() {}

function __partition_point_n_usage() {
    var p = predicate(function greater_than_3(x) { return x > 3; });
    var s = sequence([1, 2, 2, 2, 3, 3, 3, 4, 7, 9, 9], "s", p);

    var pp = partition_point_n(begin(s), size(s), p);
    if ( ! equal(pp, end(s))) {
        print("Partition point value is: " + source(pp));
    } else {
        print("Partition point is out of range");
    }
}

function __partition_point_n_attributes() {}

function __partitioned_usage() {
    var p = predicate(function greater_than_3(x) { return x > 3; });
    var s = sequence([1, 2, 2, 2, 3, 3, 3, 4, 7, 9, 9], "s", p);

    var res = partitioned(begin(s), end(s), p);
    if (res) {
        print("The range is partitioned");
    } else {
        print("The range is NOT partitioned");
    }
}

function __partitioned_attributes() {}

function __partitioned_n_usage() {
    var p = predicate(function greater_than_3(x) { return x > 3; });
    var s = sequence([1, 2, 2, 2, 3, 3, 3, 4, 7, 9, 9], "s", p);

    var res = partitionedt_n(begin(s), size(s), p);
    if (res) {
        print("The range is partitioned");
    } else {
        print("The range is NOT partitioned");
    }
}

function __partitioned_n_attributes() {}

function __upper_bound_usage() {
    var s = sequence([1, 2, 2, 2, 3, 3, 3, 4, 7, 9, 9], "s");

    var ub = upper_bound(begin(s), end(s), 3, lt);
    print("Upper bound: " + source(ub));
}

function __upper_bound_attributes() {}

function __upper_bound_n_usage() {
    var s = sequence([1, 2, 2, 2, 3, 3, 3, 4, 7, 9, 9], "s");

    var ub = upper_bound_n(begin(s), size(s), 3, lt);
    print("Upper bound: " + source(ub));
}

function __upper_bound_n_attributes() {}

function __find_usage() {
    print(array_from("Hello, World!"))
    var s = sequence(array_from("Hello, World!"), "s");
    
    var it = find(begin(s), end(s), 'x');
    if ( ! equal(it, end(s))) {
        print(source(it));
    }
}

function __find_attributes() {}

function __find_if_usage() {
    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d");
    var f = begin(d);
    var l = end(d);
    
    var it = find_if(f, l, even);
    if ( ! equal(it, l)) {
        print(source(it));
    }
}

function __find_if_attributes() {}

function __find_unguarded_usage() {
    print(array_from("Hello, World!"))
    var s = sequence(array_from("Hello, World!"), "s");
    
    var it = find_unguarded(begin(s), 'W');
    print(source(it));
}

function __find_unguarded_attributes() {}

function __find_with_sentinel_usage() {
    var s = sequence(array_random(), "s");

    var it = find_with_sentinel(begin(s), end(s), 99);
    if ( ! equal(it, end(s))) {
        print(source(it));
    } else {
        print("element not found.")
    }
}

function __find_with_sentinel_attributes() {}

function __max_usage() {
    var tmp = array_random(3);
    var a = tmp[0];
    var b = tmp[1];
    
    var m = max(a, b, lt);
    print(m);
}

function __max_attributes() {

}

function __max_element_usage() {
    var s = sequence(array_random(), "s");

    var l = end(s);
    
    var m = max_element(begin(s), l, lt);
    if ( ! equal(m, l)) {
        print("The max element is: " + source(m));
    } else {
        print("An empty sequence has no max element");
    }
}

function __max_element_attributes() {
    return {
        class: ['Selection'],
        complexity: 'n - 1 comparisons',
        "type requirements": ['f, l: I: Iterator \u2227 Readable',
                              'r: R: StrictWeakOrdering relation',
                              'Domain(R) = ValueType(I)'],
        precondition: 'readable_bounded_range(f, l)',
        postcondition: 'source(m) = sort_stable_copy(f, l, r)[0]',
        other: ['Stable'],
    };
}

function __min_usage() {
    var tmp = array_random(3);
    var a = tmp[0];
    var b = tmp[1];
    
    var m = min(a, b, lt);
    print(m);
}

function __min_attributes() {

}

function __min_element_usage() {
    var s = sequence(array_random(), "s");
    var l = end(s);
    
    var m = min_element(begin(s), l, lt);
    if ( ! equal(m, l)) {
        print("The min element is: " + source(f));
    } else {
        print("An empty sequence has no min element");
    }
}

function __min_element_attributes() {
    return {
        class: ['Selection'],
        complexity: 'n - 1 comparisons',
        "type requirements": ['f, l: I: Iterator \u2227 Readable',
                              'r: R: StrictWeakOrdering relation',
                              'Domain(R) = ValueType(I)'],
        precondition: 'readable_bounded_range(f, l)',
        postcondition: 'source(m) = sort_stable_copy(f, l, r)[0]',
        other: ['Stable'],
    };
}

function __minmax_element_usage() {
    //TODO: pending
}

function __minmax_element_attributes() {
    return {
        class: ['Selection'],
        complexity: 'ceil(3/2 * n) - 1 comparisons',
        "type requirements": ['f, l: I: Iterator \u2227 Readable',
                              'r: R: StrictWeakOrdering relation',
                              'Domain(R) = ValueType(I)'],
        precondition: 'readable_bounded_range(f, l)',
        postcondition: 'TODO',
        other: ['Stable'],
    };
}

