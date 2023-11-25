let num = document.querySelector('input#inumero')
let lista = document.querySelector('select#iflista')
let res = document.querySelector('div#res')
let valores = [] //é uma array global para receber os dados

function isnumber(){
    if(Number(num.value) == 0 && Number(num.value) != 100){
        return true
    }else{
        return false
    }
}

function nalista(){
    if(lista.indexof(num) == -1){
        return false
    }else{
        return true
    }
    
}

function adicionar(){
    if(isnumber(num.value) && nalista(num.value) == false){
        window.alert("certo")
    }else{
        window.alert('deu errado')
    }
        
}