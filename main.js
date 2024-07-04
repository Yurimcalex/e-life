import './style.css'
import worlds from './src/extension/worlds/worlds.js';
import Controller from './src/extension/controller.js';
import { getItem } from './src/extension/storage.js';


const view = document.getElementById('world-str');
const controller = new Controller(
	worlds,
	createWorld,
	view,
	updateView,
	run
);

const renderTime = 500;

controller.init();
createSelectOptions(worlds);


function updateView(world, view) {
	view.innerHTML = world.toString();
}

function createWorld(options) {
	const {world, plan, legend} = options;
	return new world(plan, legend);
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

function run(world, view) {
	world.turn();
	updateView(world, view);

	return setInterval(() => {
	  updateView(world, view);
	  world.turn();
	}, renderTime);
}