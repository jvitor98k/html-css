function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem') 
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora>=0 && hora<12){
    img.src = 'fotomanha.jpg'
    document.body.style.background='rgb(175, 212, 244)'
} else if (hora>=12 && hora <=17){
    img.src = 'fototarde.jpg'
    document.body.style.background='rgb(246, 136, 0)'
} else if(hora>=18 && hora <=23){
    img.src = 'fotonoite.jpg'
    document.body.style.background='rgb(0, 28, 59)'
}
}
