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

// let resposta = prompt("Escolha uma resposta: SIM ou NÃO").toLocaleLowerCase()

// if(resposta === "sim"){
//     alert("Você escolheu sim!")
// }else {
//     alert("Você escolheu não!")
// }

// 7. Verificar se é divisível por 5
// Peça ao usuário para inserir um número e diga se ele é divisível por 5.

// let numero = Number(prompt("Insira um número: "))

// if(numero % 5 === 0){
//     alert("O número é divisível por 5")
// }else{
//     alert("O número não é divisível por 5")
// }

// 8. Verificar idade de entrada
// Peça ao usuário para inserir a idade e diga se ele pode votar (idade >= 16) ou não pode votar (idade < 16).

// https://www.computersciencemaster.com.br/exercicios-if-e-else/#google_vignette

// Fácil 1- Faça um programa que peça dois números e verifique (usando if e else) e imprima o maior deles 

// let numberone = Number(prompt("Insira o primeiro valor: "))
// let numbertwo = Number(prompt("Insira o segundo valor: "))

// if(numberone > numbertwo){
//     alert(`${numberone} foi o maior número inserido.`)
// }else{
//     alert(`${numbertwo} foi o maior valor inserido.`)
// }

// Fácil 2- Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo

// let valor = Number(prompt("Insira um valor: "))

// if(valor < 0){
//     alert(`Valor ${valor} é negativo.`)
// }else if(valor > 0){
//     alert(`Valor ${valor} é positivo.`)
// }else{
//     alert(`O valor é ${valor}.`)
// }

// Fácil 3- Faça um programa que verifique (usando if e else) se uma letra digitada é “F” ou “M”. Conforme a letra escrever: F – Feminino, M- Masculino, Sexo inválido. 

// let letra = prompt("Escolha F ou M para escolher o sexo: F - Feminino ou M - Masculino: ").toLocaleUpperCase()

// if(letra === "F"){
//     alert(`Letra escolhida ${letra} - Feminino.`)
// }else if(letra === "M"){
//     alert(`Letra escolhida ${letra} - Masculino`)
// }else{
//     alert("Sexo inválido!")
// }

// Fácil 4- Faça um programa que verifique (usando if e else) se uma letra digitada é vogal ou consoante. 

// let letra = prompt("Insira uma letra: ").toLocaleLowerCase()

// if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
//     alert(`Você digitou a vogal ${letra}`)
// }else{
//     alert(`Você digitou a consoante ${letra}`)
// }

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

// Calculadora

let numero1 = Number(prompt("Digite Número 1: "))
let numero2 = Number(prompt("Digite Número 2: "))

if(operacao === "+"){
    let soma = numero1 + numero2
    alert(`O resultado da soma é: ${soma}`)
}else if(operacao === "-"){
    let sub = numero1 - numero2
    alert(`O resultado da subtração é: ${sub}`)
}else if(operacao === "*"){
    let mult = numero1 * numero2
    alert(`O resultado da multiplicação é: ${mult}`)
}else if(operacao === "/"){
    let div = numero1 / numero2
    alert(`O resultado da divisão é: ${div}`)
}else {
    alert("Digite um número válido")
}
