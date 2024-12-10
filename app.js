// Função toFixed(2) - diminui as casas decimáis.

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

let lado1 = "24"
let lado2 = "25"
let lado3 = "23"

if(lado1 === lado2 && lado1 === lado3 && lado2 === lado3){
    console.log("Triangulo Equilatero")
}else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
    console.log("Triangulo Escaleno")
}else {
    console.log("Triangulo Isóscele")
}
