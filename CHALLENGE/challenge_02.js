/**
 * En el mundo del espionaje, se utiliza un lenguaje de codificación con símbolos que realizan operaciones matemáticas simples.

Tu tarea es crear un mini compilador que interprete y ejecute programas escritos en este lenguaje de símbolos.

Las operaciones del lenguaje son las siguientes:

"#" Incrementa el valor numérico en 1.
"@" Decrementa el valor numérico en 1.
"*" Multiplica el valor numérico por sí mismo.
"&" Imprime el valor numérico actual.
El valor numérico inicial es 0 y las operaciones deben aplicarse en elorden en que aparecen en la cadena de símbolos.

** Ejemplos de entrada: **
Entrada: "##*&"
Salida esperada: "4"
Explicación: Incrementa (1), incrementa (2), multiplica (4), imprime (4).

Entrada: "&##&*&@&"
Salida esperada: "0243"
Explicación: Imprime (0), incrementa (1), incrementa (2), imprime (2), multiplica (4), imprime (4), decrementa (3), imprime (3).

** Tu desafío: **
Desarrolla un mini compilador que tome una cadena de texto y devuelva otra cadena de texto con el resultado de ejecutar el programa.
 */

export default function compiler(string){
    let value = 0;
    const printSymbol = '&'
    const stringValues = []
    const stringObjects = {
        '#': (value)=> (value + 1),
        '@': (value)=> (value -1),
        '*': (value)=> (value * value),
        '&': (value) => value
    }

    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        if(stringObjects[element]){
            if(printSymbol === element){
                stringValues.push(value)
            }
            value = stringObjects[element](value)
        }
        
    }

    return stringValues.join('')
}