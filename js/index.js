console.log('Saludos desde terminal')

// var, let, const
var a =10
var a = '10 '


let b =11
//let b = '11' //No puedo redefinir

const PI = 3.1416 
//PI = 3.1417

console.log('concatenar =>', a+b)

/*
let nombre= prompt('Cual es tu nombre')
console.log('nombre =>', nombre)
console.log('typeof => ', typeof nombre)

let edad= prompt('Cual es tu edad')
console.log('nombre =>', parseInt(edad))
console.log('typeof => ', typeof parseInt(edad))
*/

console.log('document => ', document)
console.log('document => ', document.head)
console.log('document => ', document.body)
console.log('document => ', document.title)
console.log('document => ', document.domain)

document.title = 'Cambiando desde JS'

/*
getElementById('titulo')
GetElementByClassName('miclasse')
getElementByTabName ('div')

guerySelector(selector) '#id''.clase''div'
guerySelectorAll

createElement('elemento')
createDocumentFragment('')
*/ 

document.addEventListener('DOMContentLoaded', ( ) => {
    console.log('dom => carga todo')
    console.log(document.querySelector(h1))
})