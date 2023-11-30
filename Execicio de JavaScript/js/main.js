const form = document.querySelector('#formulario');
form.addEventListener('submit', function (e) {
	e.preventDefault();
	const imputPeso = e.target.querySelector('#peso');
	const imputAltura = e.target.querySelector('#Altura');
	const peso = Number(imputPeso.value);
	const altura = Number(imputAltura.value);

	if (!peso) {
		setResultado('Peso Invalido', false);
		return;
	}
	if (!altura) {
		setResultado('altura Invalido', false);
		return;
	}

	const imc = getImc(peso, altura);
	const nivelIMC = getNivelImc(imc);

	const msg = `Seu IMC é de ${imc}, o nivel é ${nivelIMC}`;

	setResultado(msg, true);
});
/* Menos do que 18,5

Entre 18,5 e 24,9

Entre 25 e 29,9

Entre 30 e 34,9

Entre 35 e 39,9

Maior do que 40*/

function getNivelImc(imc) {
	const nivel = [
		'Abaixo do peso',
		'Peso normal',
		'Sobrepeso',
		'Obesidade grau I',
		'Obesidade grau II',
		'Obesidade grau III',
	];

	if (imc >= 39.9) {
		return nivel[5];
	} else if (imc >= 34.9) {
		return nivel[4];
	} else if (imc >= 29.9) {
		return nivel[3];
	} else if (imc >= 24.9) {
		return nivel[2];
	} else if (imc >= 18.5) {
		return nivel[1];
	} else {
		return nivel[0];
	}
}

function getImc(peso, altura) {
	const imc = peso / altura ** 2;
	return imc.toFixed(2);
}

function criaP(className) {
	const p = document.createElement(`p`);
	return p;
}

function setResultado(msg, isValid) {
	const resultado = document.querySelector('#resultado');
	resultado.innerHTML = ``;

	const p = criaP();
	if (isValid) {
		p.classList.add('paragrafo-resuldado');
	} else {
		p.classList.add('bad');
	}

	p.innerHTML = msg;
	resultado.appendChild(p);
}
