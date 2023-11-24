let num = [5,8,2,9,3] //isso é um array, variaveis composta,consegue receber varios elementos e conteudo

num.sort()//você usar para colocar os elementos em ordem crescenter
num.push(10) // a ordem influencia toma cuidado,voce acrescentar um elemento e conteudo
num[5]= 11 // você tambem acrescentar um elemento e conteudo - use mais esse comando depende
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor da array é ${num[0]}`)//num[0] voçe mostrar o primeiro valor da array num é o nome do array que voce escolheu pode ser qualquer um

let pos = num.indexOf(3) // .indexOf procura o valor das arrays
if(pos == 0){
    console.log(`Posição não encontrada`)
}else{
    console.log(`a posição é ${pos}`)
}
