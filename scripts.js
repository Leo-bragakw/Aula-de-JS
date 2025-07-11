/* 
    - Conversão de tipos (type casting ou type conversion):
      ocorre quando você explicitamente transforma um valor de um tipo para outro. Isso é feito de forma consciente, 
    usando funções ou métodos especificos para realizar a conversão.

   
*/

console.log ( typeof "9")
console.log (typeof Number ("9"))

let value = "9"
console.log ( typeof value)
console.log (typeof Number (value))

let age = 18
console.log (typeof age.toString())
console.log (typeof String(age))

let option = 1
console.log (typeof option)
console.log (typeof Boolean(option))
console.log (Boolean (option))


/*
    - Coerção de tipos:
      acontece de forma automática (implicitamente). O JavaScript tenta automaticamente converter um dos valores para um tipo
      compatível antes de realizar a operação.
*/

console.log ("10" + 5) // o JS converte o número 5 num texto.
console.log (typeof ("10" + 5))
