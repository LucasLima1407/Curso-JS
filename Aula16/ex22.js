function parimp(n) {
    if( n % 2 == 0){
        console.log(`${n} é par`)
        return 'par'
    } else{
        console.log(`${n} é ímpar`)
        return 'ímpar'
    }
}
let res = parimp(12)