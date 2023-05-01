var idade = 177
console.log(`voce tem ${idade} anos.`)
if (idade<16){
    console.log(`nao pode votar`)
} else if(idade < 18){
    console.log(`voto opcional`)
} else if(idade >= 18 && idade <= 65){
    console.log(`voto obrigatorio`)
} else if(idade > 65) {
    console.log(`voto opcional por conta da idade avançada`)
}




