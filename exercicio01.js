/*  Verificar se o número é positivo ou negativo.
    Peça ao usuário para inserir um número e diga se ele é positivo ou negativo. */

let numero = prompt("Insira um número")

if(numero < 0){
    alert(`${numero}` + " é um número negativo pois é menor que zero.")
} else if(numero > 0) {
    alert(`${numero}` + " é um número positivo pois é maior que zero.")
} else {
    alert("O número é zero.")
}
