function verificar(){
    var ano_nascimento_txt = window.document.getElementById('iano')
    var ano_nasc = Number(ano_nascimento_txt.value)

    var data = new Date()
    var ano_atual = data.getFullYear()

    var idade = ano_atual - ano_nasc

    var resposta = window.document.getElementById('itexto')

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (ano_nasc == 0 || ano_nasc > ano_atual){
        window.alert('[Erro] Verifique os dados e tente novamente.')
    }else{
        var idade = ano_atual - ano_nasc
        var sexo = window.document.getElementsByName('sexo')
        var genero = ''
        var fase_vida = ''

        if (sexo[0].checked){
            genero = "Homem"

            if (idade > 0 && idade <= 5){
                fase_vida = "Bebê"
                img.setAttribute('src', 'images/bebe-homem.jpg')
            }else if (idade <= 12){
                fase_vida = "Criança"
                img.setAttribute('src', 'images/crianca-homem.jpg')
            }else if (idade <= 16){
                fase_vida = "Adolescente"
                img.setAttribute('src', 'images/adolescente-homem.jpg')
            }else if (idade <= 25){
                fase_vida = "Jovem"
                img.setAttribute('src', 'images/jovem-homem.jpg')
            }else if (idade <= 60){
                fase_vida = "Adulto"
                img.setAttribute('src', 'images/adulto-homem.jpg')
            }else if (idade <= 130){
                fase_vida = "Idoso"
                img.setAttribute('src', 'images/idoso-homem.jpg')
            }
        }else if (sexo[1].checked){
            genero = "Mulher"

            if (idade > 0 && idade <= 5){
                fase_vida = "Bebê"
                img.setAttribute('src', 'images/bebe-mulher.jpg')
            }else if (idade <= 12){
                fase_vida = "Criança"
                img.setAttribute('src', 'images/crianca-mulher.jpg')
            }else if (idade <= 16){
                fase_vida = "Adolescente"
                img.setAttribute('src', 'images/adolescente-mulher.jpg')
            }else if (idade <= 25){
                fase_vida = "Jovem"
                img.setAttribute('src', 'images/jovem-mulher.jpg')
            }else if (idade <= 60){
                fase_vida = "Adulto"
                img.setAttribute('src', 'images/adulto-mulher.jpg')
            }else{
                fase_vida = "Idoso"
                img.setAttribute('src', 'images/idoso-mulher.jpg')
            }
        }
    }
    
    resposta.innerHTML = `Detectamos um(a) ${fase_vida} ${genero} com ${idade} ano(s).`
    resposta.appendChild(img)
    foto.style.width = '200px'
    foto.style.height = '180px'
    foto.style.borderRadius = '50%'
    foto.style.marginTop = '25px'
}