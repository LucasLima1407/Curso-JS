function contar(){
let ini = window.document.getElementById('ini')
let fim = window.document.getElementById('fim')
let pas = window.document.getElementById('pas')
var txt = window.document.getElementById('txt')

if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
    window.alert("Erro, coloque um valor válido")
}
else{
let i = Number(ini.value)
let f = Number(fim.value)
let p = Number(pas.value)
var c
for(c = i; c <= f; c += p){
    txt.innerHTML += `\u{1F449}  ${c} `
}
}
}