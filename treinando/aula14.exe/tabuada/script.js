function tabuada(){
    let num = document.getElementById("txtn")
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert("preenchar o campo abaixo")
    }else{
        tab.innerHTML = ``
        let n = Number(num.value)
        let a = 1
        while(a <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${a} = ${n*a}`
            tab.appendChild(item)

            a++
            
        }
    }
}