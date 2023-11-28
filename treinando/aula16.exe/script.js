let number = document.querySelector('input#inumero')
let lista = document.querySelector('select#iflista')
let res = document.querySelector('div#res')
let dados = [] // é um array global

function isnumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function nalista(n){
    if(lista.indexOF(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isnumber(number.value) && !nalista(number.value)){
        
    }else{
    window.alert(`valor invalido ou ja encontrado na lista.`)
    }

}

   