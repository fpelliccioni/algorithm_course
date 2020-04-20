# Binary Search - Búsqueda Binaria

La idea de búsqueda binaria se origina en el [Teorema de Valor Intermedio](https://es.wikipedia.org/wiki/Teorema_del_valor_intermedio), [IVT](https://en.wikipedia.org/wiki/Intermediate_value_theorem) por sus siglas en inglés. También conocido como Teorema de [Bolzano](https://en.wikipedia.org/wiki/Bernard_Bolzano)-[Cauchy](https://en.wikipedia.org/wiki/Augustin-Louis_Cauchy):

Si *f* es una [función continua](https://es.wikipedia.org/wiki/Funci%C3%B3n_continua) en un intervalo *[a, b]* tal que *f(a) < f(b)*, entonces, para todo *u* perteneciente a *[f(a), f(b)]* existe un *c* perteneciente a *[a, b]* tal que *u = f(c)*.

La demostración de este teorema consiste en hacer búsqueda binaria.

El algoritmo de Búsqueda Binaria fue planteado por primera vez como una técnica de programación en 1946 por el pionero en computación [John Mauchly](https://es.wikipedia.org/wiki/John_William_Mauchly), co-creador de [ENIAC](https://en.wikipedia.org/wiki/ENIAC) (la primera computadora electrónica de propósito general). Sin embargo muchos detalles sobre el algoritmo quedaron sin especificar.

El primer algoritmo "correcto" para hacer búsqueda binaria fue publicado en 1960 por [D. H. Lehmer](https://en.wikipedia.org/wiki/Derrick_Henry_Lehmer), un matemático que trabajó en el proyecto ENIAC años antes. Sin embargo, la versión del algoritmo de Lehmer no tenía una interfaz correcta, y ese error se arrastró por décadas.

Un ejemplo de interfaz incorrecta que todavía perdura hasta hoy es la función `bsearch()` de [UNIX](https://en.wikipedia.org/wiki/Unix). Según el estándar [POSIX](https://en.wikipedia.org/wiki/POSIX):

> The bsearch() function shall return a pointer to a matching member of the array, or a null pointer if no match is found.  If  two  or  more members compare equal, which member is returned is unspecified.

https://www.unix.com/man-page/posix/3p/bsearch/


Hay 2 errores fundamentales en esta interfaz. El primero es el retorno de un `null pointer` para indicar que el elemento no fue encontrado. Hay veces en las que hacemos búsqueda binaria porque queremos insertar un nuevo ítem en caso de que este no exista. Cuando hacemos esto, lo queremos insertar en el lugar correcto, en la posición en la que debería estar en caso de existir. Con esta interfaz, una ver que `bsearch()` nos indica que no ha encontrado el elemento, tenemos que comenzar la búsqueda nuevamente, usando *búsqueda lineal*. Hay muchas otras aplicaciones en donde lo que queremos hacer es buscar la posición más cercana o la siguiente al lugar en donde debería esta el ítem a buscar.

La segunda falencia de la interfaz se da cuando hay múltiples coincidencias. ¿Cómo podemos obtener el rango completo de elementos iguales si no sabemos a cuál estamos parados? No queda otra que hacer dos búsquedas lineales, para adelante y para atrás para determinar el rango completo.
