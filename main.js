import './style.css'
import worlds from './src/extension/worlds/worlds.js';
import { saveItem, getItem } from './src/extension/storage.js';


var world;
var wInd = getItem('worldIndex') || 0;
var app = document.getElementById('world-str');


createWorld(worlds[wInd]);
app.innerHTML = world.toString();


var timer;
startBtn.onclick = function () {
	if (!timer) render();
};
stopBtn.onclick = function () {
	if (timer) {
		clearInterval(timer);
		timer = null;
	}
};
restartBtn.onclick = function () {
	if (timer) stopBtn.click();
	createWorld(worlds[wInd]);
	app.innerHTML = world.toString();
	startBtn.click();
};
selectWorld.onchange = function () {
	wInd = parseInt(this.value);
	if (timer) stopBtn.click();
	createWorld(worlds[wInd]);
	app.innerHTML = world.toString();
	saveItem('worldIndex', wInd);
};

createSelectOptions();
selectWorld.selectedIndex = wInd;


function createSelectOptions() {
	for (var i = 0; i < worlds.length; i += 1) {
		var option = document.createElement('option');
		option.value = i;
		option.innerHTML = 'world' + ' ' + i;
		selectWorld.appendChild(option);
	}
}


function createWorld(options) {
	let w = options.world;
	let plan = options.plan;
	var legend = options.legend;

	world = new w(plan, legend);
}


function render() {
	timer = setInterval(() => {
	  app.innerHTML = world.toString();
	  world.turn();
	}, 500);
}