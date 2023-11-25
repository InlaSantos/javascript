function adicionar(){
    let n = document.querySelector('input#inumero')
    let a = []
    let nr = Number(n.value)
    if(nr == 0){
        window.alert('preenchar o campo abaixo')
    }else{
        let li = document.querySelector("select#iflista")
        let item = document.createElement('option')
        item.text = `Valor ${nr} Adicionado`
        li.appendChild(item)

    }
}