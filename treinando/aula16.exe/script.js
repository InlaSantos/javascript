let numero = document.querySelector('input#inumero')
let lista = document.querySelector("select#iflista")
let res = document.querySelector('div#res')
let dados = [] // array global

function adicionar(){
    if(Number(numero.value) <= 0 || Number(numero.value) > 100){
        window.alert('Numero inválido')
    }else{
        if(dados.indexOf(numero.value) != -1){
            window.alert('numero ja presente')
        }else{
            dados.push(numero.value)
            let item = document.createElement("option")
            item.text = `Valor ${numero.value}  Adicionado`
            lista.appendChild(item)
        }
    }
}

function verificar(){
    let soma = 0
    for(let i = 0; soma < dados.length; i++){
        soma = soma + dados
    }
    res.innerHTML = `<p> Ao todo temos ${dados.length} numeros cadastrados </p>
    <p> O maior Valor informado é ${Math.max(...dados)} </p>
    <p> O menor Valor informado é ${Math.min(...dados)}`
    res.innerHTML += `<p> A soma de todos os valores é ${soma}`


}
        