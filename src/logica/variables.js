'use strict';

export let secuencia = [];
export let jugadorSecuencia = [];
export let flash;
export let turno;
export let correcto;
export let turnoCompletado;
export let idIntervalo;
export let estricto = false;
export let sonido = true;
export let prendido = false;
export let ganada;
export let puntajeMasAlto = 0;

export function setVariable(name, value) {
	switch (name) {
		case 'secuencia':
			secuencia = value;
			break;
		case 'jugadorSecuencia':
			jugadorSecuencia = value;
			break;
		case 'flash':
			flash = value;
			break;
		case 'turno':
			turno = value;
			break;
		case 'correcto':
			correcto = value;
			break;
		case 'turnoCompletado':
			turnoCompletado = value;
			break;
		case 'idIntervalo':
			idIntervalo = value;
			break;
		case 'estricto':
			estricto = value;
			break;
		case 'sonido':
			sonido = value;
			break;
		case 'prendido':
			prendido = value;
			break;
		case 'puntajeMasAlto':
			puntajeMasAlto = value;
			break;
	}
}
