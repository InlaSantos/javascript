function contar (){
    let p1 = document.getElementById("iinicio")
    let p2 = document.getElementById("ifim")
    let p = document.getElementById("ipasso")
    let res = document.getElementById("res")
    if(p1.value.length == 0 || p2.value.length == 0 ||  p.value.length == 0 ){
        window.alert("[ERRO] PREENCHA OS CAMPOS ABAIXO")
    }else{
        res.innerHTML = `Contando`
        let i = Number(p1.value)
        let f = Number(p2.value)
        let p = Number(p.value)

        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c}`
        }
    }
}