import { getItem } from './storage.js';
import Table from './table.js';
import Description from './description.js';

export default class View {
	constructor(worldsAmount) {
		//this.display = document.getElementById('world-str');
		this.table = new Table();
		this.description = new Description();

		this.selectWorld = document.getElementById('selectWorld');
		this.worldsAmount = worldsAmount;

		this.showData = this.showData.bind(this);
		this.getWorldDescription = null;
	}

	init() {
		this._createSelectOptions();
		this.description.show(
			this.getWorldDescription(this.selectWorld.selectedIndex)
		);

		this.selectWorld.addEventListener('change', (e) => {
			const descr = this.getWorldDescription(e.target.value);
			this.description.show(descr)
		});
	}

	showData(data, isNewWorld) {
		//this.display.innerHTML = data;
		if (isNewWorld) {
			this.table.remove();
			this.table = new Table();
		}
		this.table.render(data);
	}

	_logDescription(description) {
		console.log(`------------- world #${description.n} -------------`);
		console.log(description.world);
		description.legend.forEach(([ch, descr]) => console.log(`${ch} - ${descr}`));
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