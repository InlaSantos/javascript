function tabuada(){
    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab")

    if(num.value.length == 0){
        window.alert("Preencher os campos")
    }else{
        let n = Number(num.value)

        while( n <= 10){
            tab.innerHTML = `${n}`
        }

    }
}