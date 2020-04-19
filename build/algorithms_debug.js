function __debug_lower_bound(f, l, a, r) {
    //TODO: pending see lower_bound_n
}

function lower_bound(f, l, a, r) {
    var _f_ = start_f('lower_bound', f, l, a, r);
    var res = __debug_lower_bound(f, l, a, r);
    end_f(_f_);
    return res;
}

function __debug_lower_bound_n(f, n, a, r) {
    var p = predicate(function p(x) {
        return ! r(x, a);
    });
    return partition_point_n(f, n, p);
}

function lower_bound_n(f, n, a, r) {
    var _f_ = start_f('lower_bound_n', f, n, a, r);
    var res = __debug_lower_bound_n(f, n, a, r);
    end_f(_f_);
    return res;
}

function __debug_partition_point_n(f, n, p) {
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

function partition_point_n(f, n, p) {
    var _f_ = start_f('partition_point_n', f, n, p);
    var res = __debug_partition_point_n(f, n, p);
    end_f(_f_);
    return res;
}

function __debug_partitioned(f, l, p) {
    return equal(l, 
            find_if(
                find_if(f, l, p), 
                l, not(p)));
}

function partitioned(f, l, p) {
    var _f_ = start_f('partitioned', f, l, p);
    var res = __debug_partitioned(f, l, p);
    end_f(_f_);
    return res;
}

function __debug_partitioned_n(f, n, p) {
    //TODO: pending
    return true;
}

function partitioned_n(f, n, p) {
    var _f_ = start_f('partitioned_n', f, n, p);
    var res = __debug_partitioned_n(f, n, p);
    end_f(_f_);
    return res;
}

function __debug_upper_bound(f, l, a, r) {
    //TODO: pending, see upper_bound_n
}

function upper_bound(f, l, a, r) {
    var _f_ = start_f('upper_bound', f, l, a, r);
    var res = __debug_upper_bound(f, l, a, r);
    end_f(_f_);
    return res;
}

function __debug_upper_bound_n(f, n, a, r) {
    var p = predicate(function p(x) {
        return r(a, x);
    });
    return partition_point_n(f, n, p);
}

function upper_bound_n(f, n, a, r) {
    var _f_ = start_f('upper_bound_n', f, n, a, r);
    var res = __debug_upper_bound_n(f, n, a, r);
    end_f(_f_);
    return res;
}

function __debug_find(f, l, x) {
    while ( ! equal(f, l) && source(f) != x) {
        f = successor(f)
    }
    return f;
}

function find(f, l, x) {
    var _f_ = start_f('find', f, l, x);
    var res = __debug_find(f, l, x);
    end_f(_f_);
    return res;
}

function __debug_find_if(f, l, p) {
    while ( ! equal(f, l) && ! p(source(f))) {
        f = successor(f)
    }
    return f;
}

function find_if(f, l, p) {
    var _f_ = start_f('find_if', f, l, p);
    var res = __debug_find_if(f, l, p);
    end_f(_f_);
    return res;
}

function __debug_find_unguarded(f, x) {
    //precondition: Exists an iterator that points to a value equal to x.
    //postcondition: [original_f, return_value) is a valid range

    while (source(f) != x) {
        f = successor(f)
    }
    return f;
}

function find_unguarded(f, x) {
    var _f_ = start_f('find_unguarded', f, x);
    var res = __debug_find_unguarded(f, x);
    end_f(_f_);
    return res;
}

function __debug_find_with_sentinel(f, l, x) {
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

function find_with_sentinel(f, l, x) {
    var _f_ = start_f('find_with_sentinel', f, l, x);
    var res = __debug_find_with_sentinel(f, l, x);
    end_f(_f_);
    return res;
}

function __debug_max(a, b, r) {
    return r(b, a) ? a : b;
}

function max(a, b, r) {
    var _f_ = start_f('max', a, b, r);
    var res = __debug_max(a, b, r);
    end_f(_f_);
    return res;
}

function __debug_max_element(f, l, r) {
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

function max_element(f, l, r) {
    var _f_ = start_f('max_element', f, l, r);
    var res = __debug_max_element(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_min(a, b, r) {
    return r(b, a) ? b : a;
}

function min(a, b, r) {
    var _f_ = start_f('min', a, b, r);
    var res = __debug_min(a, b, r);
    end_f(_f_);
    return res;
}

function __debug_min_element(f, l, r) {
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

function min_element(f, l, r) {
    var _f_ = start_f('min_element', f, l, r);
    var res = __debug_min_element(f, l, r);
    end_f(_f_);
    return res;
}

function __debug_minmax_element(f, l, r) {
    //TODO: pending
}

function minmax_element(f, l, r) {
    var _f_ = start_f('minmax_element', f, l, r);
    var res = __debug_minmax_element(f, l, r);
    end_f(_f_);
    return res;
}



function half_nonnegative(n) {return n >> 1;}
function twice(n) {return n + n;}
function remainder(a, b) {return a % b;}var eq = relation(function eq(x, y) {return x == y;});
var lt = relation(function lt(x, y) {return x < y;});
var gt = relation(function gt(x, y) {return x < y;});
var lte = relation(function lte(x, y) {return x <= y;});
var gte = relation(function gte(x, y) {return x >= y;});


function not(p) {
    return function(x) { return ! p(x); };
}
