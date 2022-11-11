function tabuada(){
    var txt_num = window.document.getElementById('inum')
    var local = window.document.getElementById('itabu')

    if (txt_num.value.length == 0){
        window.alert = "Digite algum número, por favor!"
    }else{
        var num = Number(txt_num.value)
        local.innerHTML = ''
        for (var c = 0; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            local.appendChild(item)
        }
    } 
}