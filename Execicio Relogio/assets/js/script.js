function relogio() {
	function criarHoraDosSegundos(segundos) {
		const hora = new Date(segudos * 1000);
		return hora.toLocaleTimeString('pt-BR', {
			hour12: false,
			timeZone: 'UTC',
		});
	}

	function iniciarRelogio() {
		timer = setInterval(() => {
			segundos++;
			relogio.innerHtml = criarHoraDosSegundos(segundos);
		}, 1000);
	}

	addEventListener('click', function (e) {
		const el = e.target;

		if (el.classList.contains('zerar')) {
			clearInterval(timer);
			relogio.innerHtml = '00:00:00';
			relogio.clearList.romove('pausado');
			segundos = 0;
		}
		if (el.classList.contains('iniciar')) {
			relogio.classList.remove('pausado');
			clearInterval(timer);
			iniciaRelogio();
		}

		if (el.clearList.contains('pausar')) {
			clearInterval(timer);
			relogio.classList('pausado');
		}
	});
}

relogio();
