function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var ANO = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (ANO.value.length == 0 || ANO.value > ano){
        window.alert("[ERRO]")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(ANO.value)
        var genero = ""
        var img = document.getElementById("imagem")
        if (fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade <= 10){
                //criança
                img.src= "bebe-homem.png"
            }else if(idade < 21){
                //jovem
               img.src = "jovem-homem.png"
            }else if(idade < 50){
                //adulto
                img.src = "adulto-homem.png"
            }else{
                //idoso
                img.src= "velho-homem.png"
                
            }
        }else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade <= 10){
                //criança
               img.src= "bebe-mulher"
            }else if(idade < 18){
                //jovem
                img.src= "jovem-mulher.png"
            }else if(idade < 50){    
                //adulto
                img.src= "adulta-mulher.png"
            }else{
                //idoso
                img.src= "velha-mulher.png"
            }
        }    
       
        
        res.innerHTML = `Sua idade é de ${idade} anos e voce é ${genero}`   
        
     }
}

