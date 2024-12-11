// Função toFixed(2) - diminui as casas decimáis.

//1. Verificar se é positivo ou negativo
//Peça ao usuário para inserir um número e diga se ele é positivo ou negativo.

// let numero = Number(prompt("Insira um número: "))

// if(numero > 0){
//     alert("O número inserido é positivo")
// }else if(numero < 0){
//     alert("O número inserido é negativo")
// }else{
//     alert("O número inserido é zero")
// }

// 2. Verificar se é maior ou menor
// Peça ao usuário para inserir dois números e diga qual é maior ou se são iguais.

// let numberone = Number(prompt("Insira o primeiro valor: "))
// let numbertow = Number(prompt("Insira o segundo valor: "))

// if(numberone > numbertow){
//     alert("O primeiro valor inserido é maior")
// }else if(numberone < numbertow){
//     alert("O segundo valor inserido é maior")
// }else{
//     alert("Os dois valores são iguais")
// }

// 3. Verificar se é múltiplo de 3
// Peça ao usuário para inserir um número e diga se ele é múltiplo de 3.

// let numero = Number(prompt("Insira um  valor: "))

// if(numero % 3 === 0){
//     alert("O valor inserido é múltiplo de três")
// }else{
//     alert("O valor inserido não é múltiplo de três")
// }

// 4. Verificar se é maior de 10
// Peça ao usuário para inserir um número e diga se ele é maior que 10 ou menor ou igual a 10.

// let numero = Number(prompt("Insira um valor: "))

// if(numero > 10){
//     alert("O número inserido é maior que 10")
// }else if(numero < 10){
//     alert("O número inserido é menor que 10")
// }else{
//     alert("Os números são iguais")
// }

// 5. Verificar se é maior que 100
// Peça ao usuário para inserir um número e diga se ele é maior que 100 ou menor ou igual a 100.

// let numero = Number(prompt("Insira um valor: "))

// if(numero > 100){
//     alert("O número inserido é maior que 100")
// }else if(numero < 100){
//     alert("O número inserido é menor que 100")
// }else{
//     alert("O número inserido é igual a 100")
// }

// 6. Escolha entre "Sim" e "Não"
// Peça ao usuário para responder "Sim" ou "Não". Se ele responder "Sim", imprima "Você escolheu sim". 
// Caso contrário, imprima "Você escolheu não".

let resposta = prompt("Escolha uma resposta: SIM ou NÃO").toLocaleLowerCase()

if(resposta === "sim"){
    alert("Você escolheu sim!")
}else {
    alert("Você escolheu não!")
}


// LISTA HARD 

// 1. Escreva	 um	 programa	 para	 ler	 2	 valores	 (considere	 que	 	 não	 serão	
// informados	valores	iguais)	e	escrever	o	maior	deles.

//6.Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 (codificado	 da	 seguinte	 forma:	
// 1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que	
// calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes	
// Fórmulas:	
// - para	homens:	(72.7	*	Altura)	– 58	
// - para	mulheres:	(62.1	*	Altura)	– 44.7

// let sexo = "masculino"
// let altura = 1.70

// if (sexo == "feminino") {
//     let pesoIdeal = ((62.1 * altura) - 44.7).toFixed(2)
//     console.log(`O peso ideal é de : ${pesoIdeal}`)
// } else if (sexo === "masculino") {
//     let pesoIdeal = ((72.7 * altura) - 58).toFixed(2)
//     console.log(`O peso ideal é de : ${pesoIdeal}`)
// } else {
//     console.log("Digite um valor válido")
// }

//10. Escreva	 um	 programa que	 leia	 as	 medidas	 dos	 lados	 de	 um	 triângulo	 e	
//escreva	se	ele	é	Equilátero,	Isósceles	ou	Escaleno.	Sendo	que:	
//− Triângulo	Equilátero:	possui	os	3	lados	iguais.	
//− Triângulo	Isóscele:	possui	2	lados	iguais.	
//− Triângulo	Escaleno:	possui	3	lados	diferentes.

// let lado1 = "24"
// let lado2 = "25"
// let lado3 = "23"

// if(lado1 === lado2 && lado1 === lado3 && lado2 === lado3){
//     console.log("Triangulo Equilatero")
// }else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
//     console.log("Triangulo Escaleno")
// }else {
//     console.log("Triangulo Isóscele")
// }
