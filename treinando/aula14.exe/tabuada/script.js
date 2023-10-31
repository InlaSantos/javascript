function tabuada(){
    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab")

    if(num.value.length == 0){
        window.alert("Preencher os campos")
       
    }else{
        let n = Number(num.value)
        let c = 1

        tab.innerHTML = ``//antes começar ele limpar a area
        while( c <= 10){
            let item = document.createElement('option')//voce criar elemento no JS
            item.text = `${n} X ${c} = ${n*c}`//você coloca conteudo dentro do elemento que criou
            item.value = `tab${c}`//vc usar para outras linguagem como php.e para mostrar item selecionado
            tab.appendChild(item)//você adiciona o elemento filho ao elemento que vc criou 

            
            c++

        }

    }
}