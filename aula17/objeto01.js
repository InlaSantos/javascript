let amigo = {nome: 'jose', 
sexo: 'M', 
peso:84.4, 

engordar(p = 0){
 console.log('engordou')
 this.peso += p
}}

amigo.engordar(5)
console.log(`O amigo ${amigo.nome} ganhou, ${amigo.peso}kg`)