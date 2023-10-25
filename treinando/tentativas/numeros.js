function clicar(){
    let n = document.getElementById("botao")
    let res = document.getElementById("res")
    let numero = Number(n.value)
    while(n != numero){
        res.innerHTML = `${n}`
    }
}