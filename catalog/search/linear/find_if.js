function find_if(f, l, p) {
    while ( ! equal(f, l) && ! p(source(f))) {
        f = successor(f)
    }
    return f;
}

function usage() {
    var even = predicate(function even(x) { return (x & 1) == 0; });
    var d = sequence(array_random(), "d");
    var f = begin(d);
    var l = end(d);
    
    var it = find_if(f, l, even);
    if ( ! equal(it, l)) {
        print(source(it));
    }
}

function attributes() {}
