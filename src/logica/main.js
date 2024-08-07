'use strict';

import { play, verificar } from './logica.js';
import { clearColor, verde, rojo, amarillo, azul } from './colores.js';
import {
	TurnoContador,
	Estricto,
	Prender,
	Empezar,
	SectorVerde,
	SectorRojo,
	SectorAmarillo,
	SectorAzul,
} from './elementosdom.js';
import { setVariable, prendido, jugadorSecuencia } from './variables.js';

Estricto.addEventListener('click', () => {
	setVariable('estricto', Estricto.checked);
});

Prender.addEventListener('click', () => {
	if (Prender.checked) {
		setVariable('prendido', true);
		TurnoContador.innerHTML = '-';
	} else {
		setVariable('prendido', false);
		TurnoContador.innerHTML = '';
		clearColor();
		clearInterval(idIntervalo);
	}
});

Empezar.addEventListener('click', () => {
	if (prendido) {
		play();
	}
});

SectorVerde.addEventListener('click', () => {
	if (prendido) {
		jugadorSecuencia.push(1);
		verificar();
		verde();
		setTimeout(() => {
			clearColor();
		}, 300);
	}
});

SectorRojo.addEventListener('click', () => {
	if (prendido) {
		jugadorSecuencia.push(2);
		verificar();
		rojo();
		setTimeout(() => {
			clearColor();
		}, 300);
	}
});

SectorAmarillo.addEventListener('click', () => {
	if (prendido) {
		jugadorSecuencia.push(3);
		verificar();
		amarillo();
		setTimeout(() => {
			clearColor();
		}, 300);
	}
});

SectorAzul.addEventListener('click', () => {
	if (prendido) {
		jugadorSecuencia.push(4);
		verificar();
		azul();
		setTimeout(() => {
			clearColor();
		}, 300);
	}
});
