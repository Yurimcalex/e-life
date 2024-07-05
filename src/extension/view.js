import { getItem } from './storage.js';

export default class View {
	constructor(worldsAmount) {
		this.display = document.getElementById('world-str');
		this.selectWorld = document.getElementById('selectWorld');
		this.descrCont = document.querySelector('.descr-cont');
		this.worldsAmount = worldsAmount;

		this.showData = this.showData.bind(this);

		this.getWorldDescription = null;
	}

	init() {
		this._createSelectOptions();
		this.showDescription(
			this.getWorldDescription(this.selectWorld.selectedIndex)
		);
		this.selectWorld.addEventListener('change', (e) => {
			const descr = this.getWorldDescription(e.target.value);
			this.showDescription(descr)
		});
	}

	showData(data) {
		this.display.innerHTML = data;
	}

	showDescription(description) {
		//this._logDescription(description);
		
		const data = `
			<h3>world #${description.n}</h3>
			<p>${description.world}</p>
			<div>
				${description.legend.reduce((html, [ch, descr]) => 
					html + `<p><span>${ch}</span> - ${descr}</p>`, '')}
			</div>
		`;
		this.descrCont.innerHTML = data;
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