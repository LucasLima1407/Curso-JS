function informar(){
    var txtpais = document.getElementById("pais")
    var pais = txtpais.value
    var res = document.getElementById("res")
if(pais == "Brasil"){
    res.innerHTML = "<p>Você é um Brasileiro</p>"
}
else{
    res.innerHTML = `Você está vivendo em ${pais}`
}
}