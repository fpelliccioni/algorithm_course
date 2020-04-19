function upper_bound_n(f, n, a, r) {
    var p = predicate(function p(x) {
		return r(a, x);
	});
    return partition_point_n(f, n, p);
}

function usage() {
    var s = sequence([1, 2, 2, 2, 3, 3, 3, 4, 7, 9, 9], "s");

    var ub = upper_bound_n(begin(s), size(s), 3, lt);
    print("Upper bound: " + source(ub));
}

function attributes() {}
