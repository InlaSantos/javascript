function contar(){
    let p1 = document.getElementById("iinicio")
    let p2 = document.getElementById("ifim")
    let ini = Number(p1.value)
    let fim = Number(p2.value)
    let res = document.getElementById("res")
    if(ini === 0 && fim === 0  ){
       window.alert("preenchar os campos abaixos.")  
    }else{
        while (ini <= fim){
            res.innerHTML(`Contando: ${res}`)
        }
    }   
}

