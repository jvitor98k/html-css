function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 ||fano.value > ano){
        window.alert(' [ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'bebe-M.jpg')
            } else if(idade < 21){
                //jovem 
                img.setAttribute('src', 'jovem-M.jpg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-M.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-M.jpg')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'bebe-F.jpg')
                
            } else if(idade < 21){
                //jovem 
                img.setAttribute('src', 'jovem-F.jpg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-F.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-F.jpg')
            }
            
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos gênero ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
        
    
}