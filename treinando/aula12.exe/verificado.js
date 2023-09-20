function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = window.document.getElementById("txtano")
   var res = document.querySelector("div#res")
   if (fano.value.length == 0 || fano.value > ano){
    window.alert ("[ERRO]")
   }else{
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked){
        genero = 'homem'
        if(idade >= 0 && idade <= 10){
            //criança
            img.setAttribute('src','imagens/bebe-homem.png')
        }else if(idade < 21){
            //jovem
            img.setAttribute('src','imagens/jovem-homem.png')
        }else if(idade < 50){
            //adulto
            img.setAttribute('src','imagens/adulto-homem.png')
        }else{
            //idoso
            img.setAttribute('src','imagens/velho-homem.png')
        }
    }else if (fsex[1].checked){
        genero = 'mulher'
        if (idade >= 0 && idade <= 10){
            //criança
            img.setAttribute('src','imagens/bebe-mulher.png')
        }else if(idade < 21){
            //jovem
            img.setAttribute('src','imagens/jovem-mulher.png')
        }else if(idade < 50){
            //adulto
            img.setAttribute('src','imagens/adulta-mulher.png')
        }else{
            //idoso
            img.setAttribute('src', 'imagens/velha-mulher.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Dectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    res.style.margin.img = 'auto'
   }
}