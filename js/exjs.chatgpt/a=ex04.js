let listaDeTarefas = ['Estudar Javascript', 'Fazer exercícios físicos','Ler um livro']

console.log('Lista de Tarefas Inicial', listaDeTarefas)




listaDeTarefas.push('Fazer compras')
listaDeTarefas.unshift('Aprender algo novo')
console.log('lista de exercicios após operações', listaDeTarefas)


let ultimaTarefa = listaDeTarefas.pop()
console.log('ultima tarefa removida:', ultimaTarefa)

let primeiraTarefa = listaDeTarefas.shift()
console.log('primeira Tarefa removida:', primeiraTarefa)

let comprimentoDaLista = listaDeTarefas.length // não tem parenteses no final quando usar desse jeito
console.log('comprimento da lista atual:', comprimentoDaLista)

let parteDaLista = listaDeTarefas.slice(1,2)
console.log('Parte da Lista:', parteDaLista) 

let elementosRemovidos = listaDeTarefas.splice(0,1)
console.log('Elementos removidos:', elementosRemovidos)

console.log('adicionando mais tarefas')
let novasTarefas = [...listaDeTarefas, 'Aprender a falar inglês', 'Praticar o espanhol' ]
console.log('Novas Tarefas', novasTarefas)






