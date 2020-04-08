
// const lessThan = (a, b) => a < b;
var comparisons = 0;
const lessThan = function(a, b) {
    ++comparisons;
    return a < b;
}

function minElement(list, f = 0, l, r = lessThan) {
	l = l || list.length;

    if (f == l) return l;
    var min = f;
    ++f;
    while (f != l) {
		if (r(list[f], list[min])) { 
			min = f;
        }
        ++f;
    }
	return min;
}

function maxElement(list, f = 0, l, r = lessThan) {
	l = l || list.length;

    if (f == l) return l;
    var max = f;
    ++f;
    while (f != l) {
		if ( ! r(list[f], list[max])) {
			max = f;
        }
        ++f;
	}
	return max;
}

// function minMaxElement(list, f = 0, l, r = lessThan) {
// 	l = l || list.length;
// 	if (f == l) return l;

//     var min = f;
// 	var max = f;

//     ++f;
//     while (f != l) {
//         if (r(list[f], list[min])) {
// 			min = f;
// 		}
//         if ( ! r(list[f], list[max])) {
// 			max = f;
//         }
//         ++f;
// 	}
//     return {min, max};
// }

function minMaxElement(list, f = 0, l, r = lessThan) {
	l = l || list.length;
	if (f == l) return l;

    var min = f;
	var max = f;

    ++f;
    while (f != l) {
        if (r(list[f], list[min])) {
			min = f;
		} else if ( ! r(list[f], list[max])) {
			max = f;
        }
        ++f;
	}
    return {min, max};
}


// function minmax(a, b, r = lessThan) {
// 	return r(b, a)
// 		? {min: b, max: a}
// 		: {min: a, max: b};
//   }
  

function minMaxElementPohl(list, f = 0, l, r = lessThan) {
    l = l || list.length;

    if (f == l) return {min: l, max: l};
    var min = f;
    ++f;
    if (f == l) return {min: min, max: min};
    var max = f;

    if (r(list[max], list[min])) {
        [min, max] = [max, min];    //swap
    }

    ++f;

    while (f != l) {
        // invariant:
        //  min points to the current minimum
        //  max points to the current maximum

        var prev = f;
        ++f;
        // if (f == l) {
        //     if (r(list[prev], list[min])) {
        //         min = prev;
        //     } else if ( ! r(list[prev], list[max])) {
        //         max = prev;
        //     }
        //     return {min, max};
        // }

        var pot_min = prev;
        var pot_max = f;
        if (r(list[pot_max], list[pot_min])) {
            [pot_min, pot_max] = [pot_max, pot_min];    //swap
        }

        if (r(list[pot_min], list[min])) {
			min = pot_min;
        }
        
        if ( ! r(list[pot_max], list[max])) {
			max = pot_max;
        }
        ++f;
    }

    return {min, max};
}


//----------------------------------------------------
// Instrumentation code

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomIntArray(n, min, max) {
    var ret = [];
    while (n != 0) {
        ret.push(getRandomInt(min, max));
        --n;
    }
    return ret;
}

//----------------------------------------------------


function main() {
    const n = 100000;
    const from = 0;
    const to = 10000000;
    const data = getRandomIntArray(n, from, to);
    // console.log(data);

    // const mm = minMaxElement(data);
    const mm = minMaxElementPohl(data);
    
    console.log(mm);
    const min = mm.min;
    const max = mm.max;

    // const min = minElement(data);
    // console.log(`comparisons = ${comparisons}`);
    // const max = maxElement(data);
    // console.log(`comparisons = ${comparisons}`);

    console.log(`comparisons = ${comparisons}`);
    console.log(`min = ${data[min]}`);
    console.log(`max = ${data[max]}`);

    data.sort((a, b) => a - b);
    // console.log(data);
    console.log(`min = ${data[0]}`);
    console.log(`max = ${data[data.length - 1]}`);
}


main();