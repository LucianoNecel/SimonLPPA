'use strict';

import { sonido, setVariable } from './variables.js';
import {
	SectorVerde,
	SectorRojo,
	SectorAmarillo,
	SectorAzul,
} from './elementosdom.js';

export function verde() {
	if (sonido) {
		let audio = document.getElementById('verde');
		audio.play();
	}
	setVariable('sonido', true);
	SectorVerde.style.backgroundColor = '#00ff00';
}

export function rojo() {
	if (sonido) {
		let audio = document.getElementById('rojo');
		audio.play();
	}
	setVariable('sonido', true);
	SectorRojo.style.backgroundColor = '#ff0000';
}

export function amarillo() {
	if (sonido) {
		let audio = document.getElementById('amarillo');
		audio.play();
	}
	setVariable('sonido', true);
	SectorAmarillo.style.backgroundColor = '#ffff00';
}

export function azul() {
	if (sonido) {
		let audio = document.getElementById('azul');
		audio.play();
	}
	setVariable('sonido', true);
	SectorAzul.style.backgroundColor = '#0000ff';
}

export function clearColor() {
	SectorVerde.style.backgroundColor = '#008b00';
	SectorRojo.style.backgroundColor = '#8b0000';
	SectorAmarillo.style.backgroundColor = '#8b9000';
	SectorAzul.style.backgroundColor = '#00008b';
}

export function flashColor() {
	SectorVerde.style.backgroundColor = '#00ff00';
	SectorRojo.style.backgroundColor = '#ff0000';
	SectorAmarillo.style.backgroundColor = '#ffff00';
	SectorAzul.style.backgroundColor = '#0000ff';
}
