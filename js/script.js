var nota1 = parseFloat(prompt('Digite a nota 1:'))
var nota2 = parseFloat(prompt('Digite a nota 2:'))
var nota3 = parseFloat(prompt('Digite a nota 3:'))

function calcularMedia(nota1, nota2, nota3) {	
	var media = parseFloat(nota1 + nota2 + nota3) / 3
	return media
}

var media = calcularMedia(nota1, nota2, nota3)

document.write('A média do aluno é: ' + Math.round(media))