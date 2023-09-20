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
        if (fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade <= 10){
                //criança
                
            }else if(idade < 21){
                //jovem
               
            }else if(idade < 50){
                //adulto
                
            }else{
                //idoso
                
            }
        }else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade <= 10){
                //criança
               
            }else if(idade < 21){
                //jovem
                
                //adulto
                
            }else{
                //idoso
                
            }
        }
        res.innerHTML = `Sua idade é de ${idade} anos e voce é ${genero}`   
    }     
     }

