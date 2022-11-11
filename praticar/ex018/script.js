function contar(){
    var txt_inicio = window.document.getElementById('istart')
    var txt_final = window.document.getElementById('iend')
    var txt_passo = window.document.getElementById('ipasso')

    var aviso = window.document.getElementById('iaviso')

    aviso.style.marginTop = "15px"
    aviso.innerHTML = "Contando..."

    if (txt_inicio.value.lenght == 0 || txt_final.value.lenght == 0 || txt_passo.value.lenght == 0){
        aviso.innerHTML = "Impossível contar!"
    }else{
        var inicio = Number(txt_inicio.value)
        var final = Number(txt_final.value)
        var passo = Number(txt_passo.value)

        if (passo == 0){
            window.alert = "Não é possível contar utilizando passo 0. Atualizando passo para [1]"
            passo == 1
        }else{
            if (inicio >= final || passo < 0){
                for (var c = inicio; c >= final; c -= passo){
                    aviso.innerHTML += `${c} 👉`
                }
                aviso.innerHTML += "🏁"
            }else{
                for (var c = inicio; c <= final; c += passo){
                    aviso.innerHTML += `${c} 👉`
                }
                aviso.innerHTML += "🏁"
            }
        }  
    }
}