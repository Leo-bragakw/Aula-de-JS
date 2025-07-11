// Escopo é a "região" onde a variavel se encontra (gloal, em bloco ou afins).
// console.log(user)
// var user = "leonardo"

// Hoisting
// var user
// console.log(user)


// o var é sempre içado a um escopo global.

// Escopo global
var email = "leo@hotmail.com"
{
    // escobo de bloco
    console.log(email)
}

{
    var age = 18
}

console.log(age)


// o let respeita sempre o escopo em que foi criado e tambem sempre respeita a hierarquia
//Ex:
{
    let think = "penso logo existo"
}

console.log(think) // aparece uma mensagem de erro.

//Ex:
let address = "rua piatã"
{
    console.log(address)
}