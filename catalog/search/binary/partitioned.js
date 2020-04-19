function partitioned(f, l, p) {
    return equal(l, 
            find_if(
                find_if(f, l, p), 
                l, not(p)));
}

function usage() {
    var p = predicate(function greater_than_3(x) { return x > 3; });
    var s = sequence([1, 2, 2, 2, 3, 3, 3, 4, 7, 9, 9], "s", p);

    var res = partitioned(begin(s), end(s), p);
    if (res) {
        print("The range is partitioned");
    } else {
        print("The range is NOT partitioned");
    }
}

function attributes() {}
