function assert(val1, val2) {
    if (val1 !== val2) {
        throw 'Error';
    }
    console.log(`${val1} equal ${val2}`);
}
const lessThan = (a, b) => a < b;
function min(a, b, r = lessThan) { // r = relación de equivalencia / complement / inverse / converse    
    return r(b, a)
        ? b
        : a;
}
function max(a, b, r = lessThan) {
    return r(a, b)
        ? b
        : a;
}
// pre-cond: a y b Empleado
function younger(a, b) {
    return min(a, b, ageCompare);
}
// pre-cond: a y b Empleado
function older(a, b) {
    return max(a, b, ageCompare);
}
function ageCompare(employee1, employee2) {
    return employee1.age < employee2.age;
}
// !(a < b) === a >= b
function complement(r) {
    return (a, b) => !r(a, b);
}
// a < b === a > b;
function converse(r) {
    return (a, b) => r(b, a);
}
// a < b => a > b => !(a > b) => a <= b
function complementOfConverse(r) {
    return complement(converse(r));
}
class Employee {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
/*
assert(min(10, 20), 10);
assert(min(100, 30), 30);
assert(min(30, 30), 30);
assert(min('a', 'b'), 'a');
assert(min('c', 'z'), 'c');
*/
const employees = [
    new Employee(10, 'John Doe', 20),
    new Employee(5, 'Jane Doe', 30),
    new Employee(55, 'Dan Abramov', 30)
];
console.log('younger', younger(employees[1], employees[0]));
console.log('younger', younger(employees[1], employees[2]));
console.log('older', older(employees[0], employees[1]));
console.log('older', older(employees[1], employees[2]));
/*stable_sort(employees)[0] === min(employees);
stable_sort(employees)[2] === max(employees);*/