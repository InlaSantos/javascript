function contar (){
    let p1 = document.getElementById("iinicio")
    let p2 = document.getElementById("ifim")
    let p = document.getElementById("ipasso")
    let res = document.getElementById("res")
    if(p1.value.length == 0 || p2.value.length == 0 ||  p.value.length == 0 ){
        window.alert("[ERRO] PREENCHA OS CAMPOS ABAIXO")
    }else{
        window.alert("okay")
        let i = Number(p1)
        let f = Number(p2)
        let res = Number(p)

        for(i = Number(p1); i <= f; p +=){
            res.innerHTML = `Contando: ${res}`
        }
    }
}