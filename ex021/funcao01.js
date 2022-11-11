function parimp(n){
    if (n % 2 == 0){
        return 'Par'
    }else{
        return 'Ímpar'
    }
}

var res = parimp(5)
console.log(`O número é ${res}`)