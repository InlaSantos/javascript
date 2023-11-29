let numero = document.querySelector('input#inumero')
let lista = document.querySelector("select#iflista")
let res = document.querySelector('div#res')
let dados = [] // array global

function adicionar(){
    if(Number(numero.value) <= 0 || Number(numero.value) > 100){
        window.alert('Numero inválido')
    }else{
        if(dados.indexOf(Number(numero.value)) != -1){
            window.alert('numero ja presente')
        }else{
            dados.push(Number(numero.value))
            let item = document.createElement("option")
            item.text = `Valor ${numero.value}  Adicionado`
            lista.appendChild(item)
            res.innerHTML = ""
        }
    }
    numero.value = ""
    numero.focus()
}

function verificar(){
    let soma = 0
    for(let i = 0; i < dados.length; i++){
        soma = soma + dados[i]
    }
    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo temos <strong>${dados.length}</strong> numeros cadastrados </p>
    <p> O maior Valor informado é <strong>${Math.max(...dados)}</strong> </p>
    <p> O menor Valor informado é <strong> ${Math.min(...dados)} </strong>`
    res.innerHTML += `<p>A soma de todos os valores é <strong> ${soma} </strong> </p>`
    res.innerHTML += `<p> A média dos Valores é <strong>${soma/dados.length}</strong> </p>`


}
        