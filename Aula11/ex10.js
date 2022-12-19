function informar(){
    var txtv = document.getElementById("txtvel")
    var res = document.getElementById("res")
    var vel = Number(txtv.value)
    res.innerHTML = `A velocidade do seu carro é ${vel} Km/h`
if(vel > 60){
    res.innerHTML += "<p>Diminua sua velocidade ou você será multado</p>"
}else{
    res.innerHTML += "<p>Você está na velocidade permitida</p>"
}
}