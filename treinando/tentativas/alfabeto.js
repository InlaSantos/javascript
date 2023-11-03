let alfabeto = ["a","b","c","d","e","f","g","h","i","j","k"]

/*for(let dpo = 0; dpo < alfabeto.length ; dpo++ ){
    console.log(`o alfabeto é esse ${alfabeto[dpo]}`)
}
*/
for(dpo in alfabeto){
    console.log(`o alfabeto é esse ${alfabeto[dpo]}`)
}


let valor = alfabeto.indexOf("b")
if(valor == -1 ){
    console.log(`A letra do alfabeto não foi encontrada`)
}else{
    
console.log(`esse é o valore de ${valor}`)
}
