function find_with_sentinel(f, l, x) {
    //TODO: pending
}

function usage() {
    print(array_from("Hello, World!"))
    var s = sequence(array_from("Hello, World!"), "s");
    
    var it = find_with_sentinel(begin(s), end(s), 'x');
    if ( ! equal(it, end(s))) {
        print(source(it));
    }
}

function attributes() {}
