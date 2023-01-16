var num = [1,2,3,4]
console.log(`Nosso vetor é ${num}`)
num[4] = 9
num.push(8)
console.log(`Nosso vetor é ${num}`)
console.log(`Nosso Vetor tem ${num.length} posições`)
num.sort()
console.log(`Nosso vetor organizado é ${num}`)

for(let pos = 0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem valores: ${num[pos]}`)
}