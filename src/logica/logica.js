'use strict';

import {
	secuencia,
	jugadorSecuencia,
	flash,
	turno,
	correcto,
	turnoCompletado,
	idIntervalo,
	estricto,
	puntajeMasAlto,
	setVariable,
	sonido,
} from './variables.js';
import {
	clearColor,
	verde,
	rojo,
	amarillo,
	azul,
	flashColor,
} from './colores.js';
import { TurnoContador, PuntajeMasAlto } from './elementosdom.js';

export function play() {
	secuencia.length = 0;
	jugadorSecuencia.length = 0;
	setVariable('flash', 0);
	setVariable('idIntervalo', 0);
	setVariable('turno', 1);
	TurnoContador.innerHTML = 1;
	setVariable('correcto', true);
	secuenciaSiguiente();
	setVariable('turnoCompletado', true);
	setVariable('idIntervalo', setInterval(turnoJuego, 1100));
}

function secuenciaSiguiente() {
	secuencia.push(Math.floor(Math.random() * 4) + 1);
}

function turnoJuego() {
	setVariable('prendido', false);

	if (flash == turno) {
		clearInterval(idIntervalo);
		setVariable('turnoCompletado', false);
		clearColor();
		setVariable('prendido', true);
	}

	if (turnoCompletado) {
		clearColor();
		setTimeout(() => {
			if (secuencia[flash] == 1) verde();
			if (secuencia[flash] == 2) rojo();
			if (secuencia[flash] == 3) amarillo();
			if (secuencia[flash] == 4) azul();
			setVariable('flash', flash + 1);
		}, 200);
	}
}

export function verificar() {
	if (
		jugadorSecuencia[jugadorSecuencia.length - 1] !==
		secuencia[jugadorSecuencia.length - 1]
	)
		setVariable('correcto', false);

	if (!correcto) {
		flashColor();
		if (sonido) {
			let audio = document.getElementById('error');
			audio.play();
		}
		setVariable('sonido', true);
		TurnoContador.innerHTML = 'NO!';
		setTimeout(() => {
			TurnoContador.innerHTML = turno;
			clearColor();

			if (estricto) {
				play();
			} else {
				setVariable('turnoCompletado', true);
				setVariable('flash', 0);
				jugadorSecuencia.length = 0;
				setVariable('correcto', true);
				setVariable('idIntervalo', setInterval(turnoJuego, 1100));
			}
		}, 800);

		setVariable('sonido', false);
	}

	if (turno == jugadorSecuencia.length && correcto) {
		setVariable('turno', turno + 1);
		jugadorSecuencia.length = 0;
		secuenciaSiguiente();
		setVariable('turnoCompletado', true);
		setVariable('flash', 0);
		TurnoContador.innerHTML = turno;
		setVariable('idIntervalo', setInterval(turnoJuego, 1100));
	}

	if (turno > puntajeMasAlto) {
		setVariable('puntajeMasAlto', turno);
		PuntajeMasAlto.innerHTML = `Puntaje más alto: ${puntajeMasAlto}`;
	}
}
