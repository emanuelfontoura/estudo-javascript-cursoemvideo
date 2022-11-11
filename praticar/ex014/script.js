function carregar(){
    var msg = window.document.getElementById('imsg')
    var foto = window.document.getElementById('inoite')
    var data_atual = new Date()
    var hora_atual = data_atual.getHours()
    var minutos_atual = data_atual.getMinutes()

    if (hora_atual <= 12){
        foto.style.border = '3px solid #e2cd9f'
        document.body.style.backgroundColor = "#e2cd9f"
        foto.src = 'images/manhã.jpg'
        msg.innerHTML = `Bom <strong>dia</strong>. Agora são ${hora_atual} horas(s) e ${minutos_atual} minuto(s).`
    }else{
        if (hora_atual <= 18){
            foto.style.border = '3px solid #b9846f'
            document.body.style.backgroundColor = "#b9846f"
            foto.src = 'images/tarde.jpg'
            msg.innerHTML = `Boa <strong>tarde</strong>. Agora são ${hora_atual} horas(s) e ${minutos_atual} minuto(s).`
        }else{
            foto.style.border = '3px solid #515154'
            document.body.style.backgroundColor = "#515154"
            foto.src = 'images/noite.jpg'
            msg.innerHTML = `Boa <strong>noite</strong>. Agora são ${hora_atual} horas(s) e ${minutos_atual} minuto(s).`
        }
    }
}