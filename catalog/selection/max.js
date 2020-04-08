function max(a, b, r) {
    return r(b, a) ? a : b;
}

function usage() {
    var tmp = array_random(3);
    var a = tmp[0];
    var b = tmp[1];
    
    var m = max(a, b, lt);
    print(m);
}

function attributes() {

}
