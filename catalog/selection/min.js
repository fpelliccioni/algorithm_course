function min(a, b, r) {
    return r(b, a) ? b : a;
}

function usage() {
    var tmp = array_random(3);
    var a = tmp[0];
    var b = tmp[1];
    
    var m = min(a, b, lt);
    print(m);
}

function attributes() {

}
