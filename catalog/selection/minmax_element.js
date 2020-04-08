function minmax_element(f, l, r) {
    //TODO: pending
}

function usage() {
    //TODO: pending
}

function attributes() {
    return {
        class: ['Selection'],
        complexity: 'ceil(3/2 * n) - 1 comparisons',
        "type requirements": ['f, l: I: Iterator \u2227 Readable',
                              'r: R: StrictWeakOrdering relation',
                              'Domain(R) = ValueType(I)'],
        precondition: 'readable_bounded_range(f, l)',
        postcondition: 'TODO',
        other: ['Stable'],
    };
}