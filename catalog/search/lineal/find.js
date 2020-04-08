function find(f, l, x) {
    while ( ! equal(f, l) && ! source(f) != x) {
        f = successor(f)
    }
    return f;
}

function usage() {
    print(array_from("Hello, World!"))
    var s = sequence(array_from("Hello, World!"), "s");
    
    var it = find(begin(s), end(s), 'x');
    if ( ! equal(it, end(s))) {
        print(source(it));
    }
}

function attributes() {}
