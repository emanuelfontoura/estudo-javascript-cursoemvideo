let num = window.document.querySelector('input#inum')
let lista = window.document.querySelector('select#ilista')
let res = window.document.querySelector('div#res')
let valores = []

document.addEventListener("keypress", function(tecla) {
    if (tecla.key === 'Enter') {
        adicionar()
    }

    if (tecla.key === 'f') {
        finalizar()
    }
})

function adicionar(){
    if (isNumber(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    }else{
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function isNumber(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let total = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0

        for (var pos in valores){
            if (valores[pos] < menor){
                menor = valores[pos]
            }

            if (valores[pos] > maior){
                maior = valores[pos]
            }

            soma += valores[pos]
        }
        media = soma / valores.length

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.<p>`
        res.innerHTML += `<p>O menor valor cadastrado é ${menor}<p>`
        res.innerHTML += `<p>O maior valor cadastrado é ${maior}<p>`
        res.innerHTML += `<p>A soma dos valores da lista é de ${soma}<p>`
        res.innerHTML += `<p>A média dos valores cadastrados é de ${media}<p>`
    }
}