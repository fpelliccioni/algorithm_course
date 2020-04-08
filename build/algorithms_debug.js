function __debug_find(f, l, x) {
    while ( ! equal(f, l) && ! source(f) != x) {
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
    //TODO: pending
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
