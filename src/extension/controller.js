import { saveItem, getItem } from './storage.js';

export default class Controller {
	constructor(worlds, createWorld, view, updateView, run) {
		this.startBtn = document.getElementById('startBtn');
		this.stopBtn = document.getElementById('stopBtn');
		this.restartBtn = document.getElementById('restartBtn');
		this.selectBtn = document.getElementById('selectWorld');

		const ind = getItem('worldIndex') || 0;
		this.worlds = worlds;
		this.world = createWorld( worlds[ind] );
		this.ind = ind

		this.createWorld = createWorld;
		this.updateView = updateView;
		this.view = view;
		this.run = run;
		
		this.timer = null;
	}

	init() {
		this.updateView(this.world, this.view);
		this.startBtn.onclick = this.start.bind(this);
		this.stopBtn.onclick = this.stop.bind(this);
		this.restartBtn.onclick = this.restart.bind(this);
		this.selectBtn.onchange = (e) => this.selectWorld(e);
	}

	start() {
		if (!this.timer) {
			this.timer = this.run(this.world, this.view);
		}
	}

	stop() {
		if (this.timer) {
			clearInterval(this.timer);
			this.timer = null;
		}
	}

	restart() {
		if (this.timer) {
			this.stopBtn.click();
		}
		this.world = this.createWorld(this.worlds[this.ind]);
		this.updateView(this.world, this.view);
		this.startBtn.click();
	}

	selectWorld(e) {
		const ind = parseInt(e.target.value);
		if (this.timer) {
			this.stopBtn.click();
		}
		this.world = this.createWorld(this.worlds[ind]);
		this.ind = ind;
		this.updateView(this.world, this.view);
		saveItem('worldIndex', ind);
	}
}