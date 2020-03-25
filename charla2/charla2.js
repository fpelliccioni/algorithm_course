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
	return r(b, a) // b < a ? a : b
		? a
		: b;
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
  /*
  console.log('younger', younger(employees[1], employees[0]));
  console.log('younger', younger(employees[1], employees[2]));
  console.log('older', older(employees[0], employees[1]));
  console.log('older', older(employees[1], employees[2]));
  console.log('older', older(employees[2], employees[1]));
  /*stable_sort(employees)[0] === min(employees);
  stable_sort(employees)[2] === max(employees);*/
//-------------------------------------------------------------------
// Tipos de complejidades:
//  - Constante     O(1)
//  - Logaritmica   O(log n)
//  - Lineal        O(n)
//  - Cuadratica    O(n^2)
// Este algoritmo tiene una complejidad lineal O(n), la cantidad de comparaciones es n - 1
function minElement(list, r = lessThan, start = 0, end) {
	end = end || list.length;
	if (start == end) {
		return end;
	}
	var min = start;
	for (var i = start + 1; i < end; i++) {
		if (r(list[i], list[min])) { // list[i] < list[min]
			min = i;
		}
	}
	return min;
  }
  /*
  console.log('minElement', minElement([1, 5, 9, 2]));
  console.log('minElement', minElement([11, 5, 9, 2, 3]));
  console.log('minElement', minElement([]));
  console.log('minElement', minElement([1, 5, 9, 2], 4));
  var list = [1, 5, 9, 2];
  var index = minElement(list, 4);
  if (index != list.length) {
	console.log('minElement * 2: ', list[index] * 2);
  } else {
	  console.log('404');
  }
  */
 const employees1 = [
	new Employee(10, 'John Doe', 40),
	new Employee(5, 'Jane Doe', 30),
	new Employee(55, 'Dan Abramov', 30)
  ];
 console.log('minElement - employees', minElement(employees1, ageCompare));