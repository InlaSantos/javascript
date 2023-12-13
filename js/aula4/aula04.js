/* arquivo JS aula 04 Array */

let produtos = ['arroz', 'Feijão', 'Leite']
var codigos = Array(10, 20, 30)
let meses = ['jan', 'Fev', 'Mai', 'abr']
//var test =  [10]
//test[0] = "oi"
//test[1] = "tudo bem?"
//test [2] = "Opa!"
 //meses[0] = 'Janeiro' 


// ADICIONAR NO FINAL PUSH =  empurre,coloca
produtos.push('Açucar', 'trigo')
codigos.push(40,50,60,70)
meses.push ('Mai', 'Jun', 'Ago', '07')

//REMOVER do final pop = estourar
produtos.pop()
codigos.pop()
meses.pop()
meses.pop()

//ADICIONAR no inicio unshift
produtos.unshift('Uva', 'Maçã')

//REMOVER do inicio shift
produtos.shift()

//REMOVER de uma posicao especifica splice
//splice = emendar
//posicao inicial,quantos  remover
codigos.splice(1,3)

//COPIAR array slice = fatiar porção
//posilção inicial, quantos copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0,3)

//VER TAMANHO DO ARRAY lenght comprimento 
meses.length
meses1.length
meses2.length

//SPREED OPERATOR ... COPIAR
let teste = [...produtos, 'Ovos', 'Pera']

//ver indice de um valor no array 
// let pos = nome_array.indexOf('Valor')
let pos = produtos.indexOf('Uva')