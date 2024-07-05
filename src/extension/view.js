import { getItem } from './storage.js';

export default class View {
	constructor(worldsAmount) {
		this.display = document.getElementById('world-str');
		this.selectWorld = document.getElementById('selectWorld');
		this.worldsAmount = worldsAmount;

		this.showData = this.showData.bind(this);
	}

	init() {
		this._createSelectOptions();
	}

	showData(data) {
		this.display.innerHTML = data;
	}

	_createSelectOptions() {
		for (let i = 0; i < this.worldsAmount; i += 1) {
			const option = document.createElement('option');
			option.value = i;
			option.innerHTML = 'world' + ' ' + i;
			this.selectWorld.appendChild(option);
		}
		this.selectWorld.selectedIndex = getItem('worldIndex') || 0;
	}
}