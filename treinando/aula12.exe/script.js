function carregar(){
    const msg = window.document.getElementById("msg")
    const img = window.document.getElementById("imagem")
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora <= 12 ){
        //Bom dia
        img.src= 'fotomanha.png'
        document.body.style.background="#fed99b"
    }else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src= 'fototarde.png'
        document.body.style.background="#fc6a01"
        
    }else{
        //Boa noite
        img.src= 'fotonoite.png'
        document.body.style.background= "#43334e "
    }
}
