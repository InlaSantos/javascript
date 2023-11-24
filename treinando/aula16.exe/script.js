function adicionar(){
    let n = document.querySelector('input#inumero')
    let li = document.querySelector('select#iflista')
    if(n.value.length == 0){
        window.alert('Preenchar os campos abaixo')
    }
}