function lower_bound(f, l, a, r) {
    //TODO: pending see lower_bound_n
}

function lower_bound_n(f, n, a, r) {
    //precondition: is_sorted_n(f, n, r);
    var p = function p(x) {
        return ! r(x, a);
    };
    return partition_point_n(f, n, p);
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

function partitioned(f, l, p) {
    return equal(l, 
            find_if(
                find_if(f, l, p), 
                l, not(p)));
}

function partitioned_n(f, n, p) {
    //TODO: pending
    return true;
}

function upper_bound(f, l, a, r) {
    //TODO: pending, see upper_bound_n
}

function upper_bound_n(f, n, a, r) {
    //precondition: is_sorted_n(f, n, r);
    var p = function(x) {
        return r(a, x);
    };
    return partition_point_n(f, n, p);
}

function find(f, l, x) {
    while ( ! equal(f, l) && source(f) != x) {
        f = successor(f)
    }
    return f;
}

function find_if(f, l, p) {
    while ( ! equal(f, l) && ! p(source(f))) {
        f = successor(f)
    }
    return f;
}

function find_unguarded(f, x) {
    //precondition: Exists an iterator that points to a value equal to x.
    //postcondition: [original_f, return_value) is a valid range

    while (source(f) != x) {
        f = successor(f)
    }
    return f;
}

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

function max(a, b, r) {
    return r(b, a) ? a : b;
}

function max_element(f, l, r) {
    if (equal(f, l)) return l;

    var m = f;
    f = successor(f);

    while ( ! equal(f, l)) {
        if ( ! r(source(f), source(m))) {
            m = f;
        }
        f = successor(f);
    }
    return m;
}

function min(a, b, r) {
    return r(b, a) ? b : a;
}

function min_element(f, l, r) {
    if (equal(f, l)) return l;

    var m = f;
    f = successor(f);

    while ( ! equal(f, l)) {
        if (r(source(f), source(m))) {
            m = f;
        }
        f = successor(f);
    }
    return m;
}

function minmax_element(f, l, r) {
    //TODO: pending
}

