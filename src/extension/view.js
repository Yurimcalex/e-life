import Table from './table.js';
import Description from './description.js';
import Selector from './selector.js';
import Settings from './settings.js';

export default class View {
	constructor(worldsAmount) {
		//this.display = document.getElementById('world-str');
		this.table = new Table();
		this.description = new Description();
		this.select = new Selector(worldsAmount);
		this.settings = new Settings(this.description.container);

		this.showData = this.showData.bind(this);
		this.getWorldDescription = null;
	}

	init() {
		this._showDescription(this.select.getIndex());
		this.select.on((e) => this._showDescription(e.target.value));
	}

	_showDescription(worldN) {
		const descr = this.getWorldDescription(worldN);
		this.description.show(descr);
	}

	showData(data, isNewWorld) {
		//this.display.innerHTML = data;
		if (isNewWorld) {
			this.table.remove();
			this.table = new Table();
		}
		this.table.render(data);
	}
}