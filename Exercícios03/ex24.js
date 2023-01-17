let num = document.querySelector("input#fnum")
let txta = document.querySelector("select#Arraynum")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado`
        txta.appendChild(item)
        res.innerHTML = ''
    } else {
       window.alert("Valor inválido ou já encontrado na lista")
    }
    num.value = ''
    num.focus()
}
function calcular(){
    if(valores.length == 0){
        window.alert("Por favor insira algum valor")
    } else {
        let tot = valores.length
        let maior = valores[0] 
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            media = soma / tot
            if(valores[pos] > maior){
                maior = valores[pos]
            } else {
                menor = valores[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados </p>`
        res.innerHTML += `<p> ${maior} é o maior valor cadastrado </p>`
        res.innerHTML += `<p> ${menor} é o menor valor cadastrado </p>`
        res.innerHTML += `<p> A soma de todos os valores é ${soma} </p>`
        res.innerHTML += `<p> A média dos valores é ${media} </p>`
    }
}