


function odd(n) {
	return !(n % 2 == 0);
}
function half(n) {
    return n >> 1;
}

function power_accumulate(a, n, r, op) {
	while (true) {
		if (odd(n)) {
			r = op(r, a)
			if (n == 1) return r;
		}
		n = half(n);
		a = op(a, a);
	}
}

function power(a, n, op, e) {
    // El conjunto de a con su operación op deben ser un Monoide
    // n es un número entero: 0, 1, 2, ...

    if (n == 0) return e;

    while ( ! odd(n)) {
        a = op(a, a);
        n = half(n); 
    }
	if (n == 1) return a;
	return power_accumulate(a, n - 1, a, op); 
}

//Suma: a + e = a       e = 0 -> a + 0 = a
//Mult: a * e = a       e = 1 -> a * 1 = a


// mult(a, n, +, 0)
// expo(a, n, *, 1)

// 0*a = 0         0 es el elemento constante de la suma
// a^0 = 1         1 es el elemento constante de la multiplicacion

// function mult(a, n) {
//     if (n == 0) return e;

//     while ( ! odd(n)) {
//         a = a + a;
//         n = half(n); 
//     }
// 	if (n == 1) return a;
// 	return mult_accumulate(a, n - 1, a); 
// }


function mult(n, a) {
    if (n == 0) return 0;
	return mult(n - 1, a) + a;
}

function exponenciacion(n, a) {
    if (n == 0) return 0;
	return exponenciacion(n - 1, a) * a;
}



/*

Estructuras algebraicas: Grupo, Monoide


------------------------------------------------------------------------------------------
Grupo
------------------------------------------------------------------------------------------

operaciones: x . y
             x^-1
constante:  e

asociatividad:     x . (y . z) = (x . y) . z
identidad:         x . e = x
cancelacion:       x . x^-1 = x^-1 . x = e 

Ejemplos de grupo:

- Conjunto:   Numeros enteros: ... -2, -1, 0, 1, 2,....
  Operación:  +
  Constante:  0 

  asociatividad:     x + (y + z) = (x + y) + z
  identidad:         x + 0 = x 
  cancelacion:       x + -x = 0 

- Conjunto:   Numeros enteros: ... -2, -1, 0, 1, 2,....
  Operación:  *
  Constante:  1

  asociatividad:     x * (y * z) = (x * y) * z
  identidad:         x * 1 = x 
  cancelacion:       x * 1/x = 1 


  1 - 2 - 3 = ????
  (1 - 2) - 3 =  -1 - 3 = -4
  1 - (2 - 3) =  1 - (-1) = 1 + 1 = 2

  1 + 2 + 3 = 6
  (1 + 2) + 3 = 6 
  1 + (2 + 3) = 6


------------------------------------------------------------------------------------------
Monoide
------------------------------------------------------------------------------------------

operaciones: x . y
constante:  e

asociatividad:     x . (y . z) = (x . y) . z
identidad:         x . e = x


- Conjunto:   Strings "abc..."
  Operación:  concatenación: +
  Constante:  ""

  asociatividad:     x + (y + z) = (x + y) + z
  identidad:         x + "" = x 

  "abc" + "def" + "ghi"    = "abcdefghi"
  ("abc" + "def") + "ghi"  = "abcdef" + "ghi"   = "abcdefghi"
  "abc" + ("def" + "ghi")  = "abc" + "defghi"   = "abcdefghi"

 Para ser un grupo, además debería cumplir con:
   cancelacion:       x + x^-1 = ""
    No es posible satisfacer la cancelación para Concatenación de String, por lo tanto, Strings con Concatención, no pueden ser un Grupo.

- Conjunto:   Matrices cuadradas 2x2
  Operación:  multiplicacion: *
  Constante:  [1, 0, 
               0, 1]

  asociatividad:     x * (y * z) = (x * y) * z
  identidad:         x * [1, 0,  = x 
                          0, 1] 


                          8^0 = 1
                          x^0 = matriz [1, 0, 0, 1]

------------------------------------------------------------------------------------------
Semigrupo
------------------------------------------------------------------------------------------

operaciones: x . y
asociatividad:     x . (y . z) = (x . y) . z


*/








/*
0*a = 0
1*a = a
2*a = a + a
3*a = a + a + a

a^0 = 
a^1 = a
a^2 = a * a
a^3 = a * a * a
*/

// function add(a, b) {return a + b;}
// function mult(a, b) {return a * b;}

// console.log(power(2, 3, add));      //multiplicacion
// console.log(power(2, 3, mult));     //exponenciación

// ==================================================================
// Fibonacci Numbers
// ==================================================================

// fib(0) == 0
// fib(1) == 1
// fib(n) == fib(n-1) + fib(n-2)


var additions = 0;
var matrix_mult = 0;


function fib0(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;

    ++additions;
    return fib0(n-1) + fib0(n-2);
}

function fib1(n) {
    if (n == 0) return 0;

    // var [f, s] = [0, 1]
    var f = 0;
    var s = 1;

    for (let i = 1; i < n; ++i) {
        ++additions;

        // [f, s] = [s, f + s];
        var tmp = f;
        f = s;
        s = tmp + s;
    }
    return s;

    /*
    n = 5
     f  s
          [0, 1]
    i = 1 [1, 0 + 1 = 1] = [1, 1]
    i = 2 [1, 1 + 1 = 2] = [1, 2]
    i = 3 [2, 1 + 2 = 3] = [2, 3]
    i = 4 [3, 2 + 3 = 5] = [3, 5]
    */

}



/*

5^2 = 5*5
5^3 = 5*5*5
5^4 = 5*5*5*5
...


|1 1|^2
|1 0|

|1 1|   |1 1|
|1 0| x |1 0| =  


|1 1|^3
|1 0|

|1 1|   |1 1|   |1 1|
|1 0| x |1 0| x |1 0|


  A       B              C 
|a b|   |e f|   |a*e+b*g   a*f+b*h|
|c d| x |g h| = |c*e+d*g   c*f+d*h|

|1 2|   |5 6|   |1*5+2*7   1*6+2*8|    |19 22|
|3 4| x |7 8| = |3*5+4*7   3*6+4*8|  = |43 50|


|1 1| 
|1 0| x 


*/

// function fib_matrix_mult(a , b) {
//     additions += 3;
//     ++matrix_mult;
//     return [
//             a[0] * (b[1] + b[0]) + a[1] * b[0],
//             a[0] * b[0] + a[1] * b[1]
//         ];
// }

function fib_matrix_mult(a , b) {
    // additions += 3;
    ++matrix_mult;
/*
|a b|   |e f|   |a*e+b*g   a*f+b*h|
|c d| x |g h| = |c*e+d*g   c*f+d*h|

    [a[0], a[1],
     a[2], a[3]]

    [b[0], b[1],
     b[2], b[3]]
*/
    return [a[0]*b[0]+a[1]*b[2], a[0]*b[1]+a[1]*b[3], 
            a[2]*b[0]+a[3]*b[2], a[2]*b[1]+a[3]*b[3]];
}

function fib2(n) {
    // var res = power([1, 0], n, fib_matrix_mult, [0, 1]);
    var matrix_e = [1, 0, 0, 1];
    var res = power([1, 1, 1, 0], n, fib_matrix_mult, matrix_e);
    return res[1];
}





// var n = 78;
var n = 50;

// console.log(fib0(n));
// console.log(`additions: ${additions}`);
// additions = 0;

console.log(fib1(n));
console.log(`additions: ${additions}`);
additions = 0;

// var xxx = fib_matrix_mult([1, 1, 1, 0], [1, 1, 1, 0]);
// console.log(xxx)


console.log(fib2(n));
console.log(`additions: ${additions}`);
console.log(`matrix_mult: ${matrix_mult}`);
additions = 0;


// for (let i = 0; i < 100; ++i) {
//     var res1 = fib1(i);
//     var res2 = fib2(i);

//     if (res1 != res2) {
//         console.log(`FAILED!!!!!!!!!!!`);
//         console.log(`n: ${n}`);
//         console.log(`fib1: ${res1}`);
//         console.log(`fib2: ${res2}`);
//         break;
//     }

//     console.log(`n: ${n}`);
//     console.log(`fib1: ${res1}`);
//     console.log(`additions: ${additions}`);
//     additions = 0;
//     matrix_mult = 0;

//     console.log(`fib1: ${res2}`);
//     console.log(`additions: ${additions}`);
//     console.log(`matrix_mult: ${matrix_mult}`);
//     additions = 0;
//     matrix_mult = 0;

// }




/*
fib(5) = fib(5-1)                          + fib(5-2)

fib(5) = fib(4)                            + fib(3)
       = fib(3)          + fib(2)          + fib(2)          + fib(1)
       = fib(2) + fib(1) + fib(1) + fib(0) + fib(1) + fib(0) + fib(1)
       = fib(1) + fib(0) + fib(1) + fib(1) + fib(0) + fib(1) + fib(0) + fib(1)

       = 17 sumas


fib(4) = fib(3) + fib(2)


fib(3) = fib(2) + fib(1)


fib(2) = fib(1) + fib(0)
*/


