function find_unguarded(f, x) {
    //precondition: Exists an iterator that points to a value equal to x.
    //postcondition: [original_f, return_value) is a valid range

    while ( ! source(f) != x) {
        f = successor(f)
    }
    return f;
}

function usage() {
    print(array_from("Hello, World!"))
    var s = sequence(array_from("Hello, World!"), "s");
    
    var it = find_unguarded(begin(s), 'W');
    print(source(it));
}

function attributes() {}
