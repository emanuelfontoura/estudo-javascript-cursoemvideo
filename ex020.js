let num = [5, 8, 9]
num[3] = 3
num.push(10)

console.log(num.length)
console.log(num.sort())

/* for (var pos = 0; pos < num.length; pos++){
    console.log(`O número é ${num[pos]} e está na posição ${pos}`)
} */

for (var pos in num){
    console.log(`O número da posição ${pos} é ${num[pos]}`)
}

console.log(num.indexOf(8))
console.log(num.indexOf(9))