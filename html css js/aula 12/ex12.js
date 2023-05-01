var agora = new Date()
var hora = agora.getHours()
if(hora>=0 && hora <=11){
    console.log(`São ${hora} hrs, Bom Dia!`)
}else if(hora>=12 && hora<=17){
    console.log(`São ${hora} hrs, Boa Tarde!`)
}else if(hora>=18 && hora<=23){
    console.log(`São ${hora} hrs, Boa Noite!`)
}