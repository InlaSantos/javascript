let pessoa = {
    lutador: 'Fedor Vladimirovich Emelianenko',
    Nacionalidade: 'Russo',
    Idade: 44,
    Peso: 106,
    Altura: 1.83
}

document.write(`<h1>Informações</h1>`)
document.write(`Lutador : ${pessoa.lutador} <br>
Nacionalidade: ${pessoa.Nacionalidade} <br>
Idade: ${pessoa.Idade} anos <br>
Peso: ${pessoa.Peso} KG <br>
Altura: ${pessoa.Altura} m`)

const dia = 10
const mes = 9
const ano = 2021
const mensagem = 'Seja curioso.Leia de tudo.Tente coisa novas.O que as pessoas chamam de inteligência se resume a curiosidade.'
const autora = 'Aaron Swartz'
document.write(`<h2>Frase Do Dia</h2>`)
document.write(`${dia}/${mes}/${ano} <br> ${mensagem} <br> ${autora}`)

let meses = ['Janeiro', 'Fevereiro', 'Março','ETC.']
document.write(`<h3>Array de Meses do Ano</h3> <br>
${meses}`)

let jogo = {
    jogo: 'League Of Legends - LOL',
    DesenvolvidoPor: 'Riot Games',
    ano: 2009 
}
document.write(`<h4>Objeto Jogo</h4>`)
document.write(`Jogo: ${jogo.jogo}<br>`)
document.write(`Desenvolvido por: ${jogo.DesenvolvidoPor}<br>`)
document.write(`Ano de Lançamento: ${ano}<br>`)