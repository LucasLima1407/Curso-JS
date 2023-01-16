function tabuada(){
    let ini = window.document.getElementById('ini')
    let fim = window.document.getElementById('fim')
    var txt = window.document.getElementById('txt')
    
    if(ini.value.length == 0 || fim.value.length == 0){
        window.alert("Erro, coloque um valor válido")
    }
    else{
    let i = Number(ini.value)
    let f = Number(fim.value)
    var c = 1
    for(c; c <= f; c++){
        var z = i * c
        let item = document.createElement('option')
        item.text += ` \u{1F449} ${i}x${c}=${z} `
        item.value = `txt${c}`
        txt.appendChild(item)
    }
    }
    }