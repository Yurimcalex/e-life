import { getItem } from './storage.js';

export default class Selector {
	constructor(count) {
		this.select = document.getElementById('selectWorld');
		this._createOptions(count);
	}

	_createOptions(count) {
		for (let i = 0; i < count; i += 1) {
			const option = document.createElement('option');
			option.value = i;
			option.innerHTML = 'World' + ' ' + i;
			this.select.appendChild(option);
		}
		this.select.selectedIndex = getItem('worldIndex') || 0;
	}

	getIndex() {
		return this.select.selectedIndex;
	}

	on(callback) {
		this.select.addEventListener('change', callback);
	}
}