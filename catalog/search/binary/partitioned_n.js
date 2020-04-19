function partitioned_n(f, n, p) {
    //TODO: pending
    return true;
}

function usage() {
    var p = predicate(function greater_than_3(x) { return x > 3; });
    var s = sequence([1, 2, 2, 2, 3, 3, 3, 4, 7, 9, 9], "s", p);

    var res = partitionedt_n(begin(s), size(s), p);
    if (res) {
        print("The range is partitioned");
    } else {
        print("The range is NOT partitioned");
    }
}

function attributes() {}
