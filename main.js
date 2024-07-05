import './style.css'
import worlds from './src/extension/worlds/worlds.js';
import Controller from './src/extension/controller.js';
import View from './src/extension/view.js';
import { getItem } from './src/extension/storage.js';


class Main {
	constructor(worlds, show) {
		this.display = document.getElementById('world-str');
		this.worlds = worlds;
		this.show = show;
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
		this.show(this.world.toString());
		//this.display.innerHTML = this.world.toString();
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


const view = new View(worlds.length);
view.init();

const main = new Main(worlds, view.showData);
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