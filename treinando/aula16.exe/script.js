let num = document.querySelector('input#inumero')
let lista = document.querySelector("select#iflista")
let rest = document.querySelector('div#res')
let dados = []

function adicionar(){
    if(Number(num.value) == 0 || Number(num.value) >= 101){
        window.alert('Numero Invalido')
    }else{
        dados.push(num.value)
        if(lista.indexOF(num.value) != -1){
            window.alert(`Valor ja presente na lista`)
        }else{
            let item = document.createElement("option")
            item.text = `Valor ${dados} adicionado`
            lista.appendChild(item)
        }
    }
}