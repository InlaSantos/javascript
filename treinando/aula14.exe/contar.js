function contar(){
    let p1 = document.getElementById("iinicio")
    let p2 = document.getElementById("ifim")
    let ini = Number(p1.value)
    let fim = Number(p2.value)
    let s = ini + fim 
    let res = document.getElementById("res")
    res.innerHTML = `soma é ${s}`
    

}


