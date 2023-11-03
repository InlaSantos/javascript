let valores = [5,6,8,7,4,1,3]

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])


for (let pos = 0; pos < valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`) // você simplificou o codigo for()mas só funciona com arrays e objetos
}
