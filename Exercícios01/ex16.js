function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.getElementById("div#res")
    var texto = window.document.getElementById("txt")
    if (fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert("Erro, preencha os dados e tente novamente")
    } else {
       var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.getElementById("img")
        if(fsex[0].checked){
            genero = "Homem"
            if(idade <= 0 && idade < 14){
                img.src = "Imagens/HomemCriança.png"
            } else if(idade < 22){
                img.src = "Imagens/HomemJovem.png"
            } else if(idade < 51){
            img.src = "Imagens/HomemAdulto.png"
        } else{
            img.src = "Imagens/HomemIdoso.png"
        }
        } else if(fsex[1].checked) {
            genero = "Mulher"
            if(idade <= 0 && idade < 14){
                img.src = "Imagens/MulherCriança.png"
            } else if(idade < 22){
                img.src = "Imagens/MulherJovem.png"
            } else if(idade < 51){
            img.src = "Imagens/MulherAdulta.png"
        } else{
            img.src = "Imagens/MulherIdosa.png"
        }
        }
        txt.innerHTML = `Detectamos ${genero} de idade ${idade}.`
    }
}