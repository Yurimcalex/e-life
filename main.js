import './style.css'
import worlds from './src/extension/worlds/worlds.js';
import Controller from './src/extension/controller.js';
import { getItem } from './src/extension/storage.js';


class Main {
	constructor(worlds) {
		this.display = document.getElementById('world-str');
		this.worlds = worlds;
		this.world;
		this.renderTime = 500;

		this.update = this.update.bind(this);
		this.run = this.run.bind(this);
	}

	init(worldN) {
		this.createWorld(this.worlds[worldN]);
		this.updateDisplay();
	}

	updateDisplay() {
		this.display.innerHTML = this.world.toString();
	}

	createWorld(options) {
		const {world, plan, legend} = options;
		this.world = new world(plan, legend);
	}

	update(worldN) {
		this.createWorld(this.worlds[worldN]);
		this.updateDisplay();
	}

	run() {
		this.world.turn();
		this.updateDisplay();

		return setInterval(() => {
			this.world.turn();
			this.updateDisplay();
		}, this.renderTime);
	}
}


createSelectOptions(worlds);
const main = new Main(worlds);
main.init(selectWorld.selectedIndex);
const controller = new Controller(main.update, main.run);
controller.init();

getDescription(worlds[selectWorld.selectedIndex]);
selectWorld.addEventListener('change', (e) => {
	const ind = e.target.selectedIndex;
	getDescription(worlds[ind]);
});


function getDescription(worldSchema) {
	const { world, legend } = worldSchema;
	console.log(`------------- world #${selectWorld.selectedIndex} -------------`);
	console.log(world.description);
	let critters = Object.entries(legend);
	critters.forEach(([ch, c]) => console.log(`${ch} - ${c.description}`));
}


function createSelectOptions(worlds) {
	worlds.forEach((_w, i) => {
		const option = document.createElement('option');
		option.value = i;
		option.innerHTML = 'world' + ' ' + i;
		selectWorld.appendChild(option);
	});
	selectWorld.selectedIndex = getItem('worldIndex') || 0;
}