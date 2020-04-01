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
//  console.log('minElement - employees', minElement(employees1, ageCompare));



//----------------------------------- CLASE 3 03/31/2020 -----------------------------------------
//minElement, maxElement, minMaxElement, minMaxElementIraPohl complejidad tiempo son lineal y constante en memoria
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

/*
Ira Pohl descubrió un algoritmo para obtener el mínimo y máximo elemento de una secuencia
haciendo sólo Math.ceil(3/2 * n) - 2 comparaciones (contra 2*n - 2 del algoritmo naive).
Pohl demostró que el algoritmo es óptimo.
*/
function minMaxElementEvenListIraPohl(list, r = lessThan, start = 0, end) {
  end = end || list.length;
  if (start == end) {
    return [start, end];
  }
  var min = start;
  ++start;
  var max = start;
  ++start;
  if (r(max, min)) {
    // JS Syntax para swap de valores
    [min, max] = [max, min];
  }
  while (start != end) {
    // Loop invariant: min es el minimo actual de la lista
    // y max es el maximo actual de la lista
    prev = start;
    ++start;
    // Con este if podemos obtener el minimo potencial y el maximo potencial
    var potMin = prev;
    var potMax = start;
    if (r(list[start], list[prev])) {
      // JS Syntax para swap de valores
      [potMin, potMax] = [potMax, potMin];
    }
    if (r(list[potMin], list[min])) {
      min = potMin;
    }
    if (!r(list[potMax], list[max])) {
      max = potMax;
    }
    ++start;
  }
  return [min, max];
}
  function minMaxElementEvenListIraPohlWithStats(list, r = lessThan, start = 0, end) {
  nApplicationOfR = 0;
  end = end || list.length;
  if (start == end) {
    return [start, end];
  }
  var min = start;
  ++start;
  var max = start;
  ++start;
  if (r(max, min)) {
    // JS Syntax para swap de valores
    [min, max] = [max, min];
  }
  while (start != end) {
    // Loop invariant: min es el minimo actual de la lista
    // y max es el maximo actual de la lista
    prev = start;
    ++start;
    // Con este if podemos obtener el minimo potencial y el maximo potencial
    var potMin = prev;
    var potMax = start;
    if (r(list[start], list[prev])) {
      // JS Syntax para swap de valores
      [potMin, potMax] = [potMax, potMin];
    }
    if (r(list[potMin], list[min])) {
      min = potMin;
    }
    if (!r(list[potMax], list[max])) {
      max = potMax;
    }
    ++start;
  }
  return [min, max];
}



list = getRandomIntArray(100, 1, 500);
//list = [320, 200, 50, 100];
//console.log(list);
//console.log('minElement : ', minElementWithStats(list));
//console.log('minElement : ', maxElementWithStats(list));
nApplicationOfR = 0;
console.log('minElement : ', minElement(list, lessThanWithStats));
console.log("nApplicationOfR: " + nApplicationOfR);
nApplicationOfR = 0;
console.log('maxElement : ', maxElement(list, lessThanWithStats));
console.log("nApplicationOfR: " + nApplicationOfR);
nApplicationOfR = 0;
console.log('minMaxElement : ', minMaxElement(list, lessThanWithStats));
console.log("nApplicationOfR: " + nApplicationOfR);
nApplicationOfR = 0;
console.log('minMaxElement : ', minMaxElementEvenListIraPohl(list, lessThanWithStats));
console.log("nApplicationOfR: " + nApplicationOfR);