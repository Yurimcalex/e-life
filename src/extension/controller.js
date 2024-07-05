import { saveItem, getItem } from './storage.js';

export default class Controller {
	constructor(update, run) {
		this.update = update;
		this.run = run;
		this.startBtn = document.getElementById('startBtn');
		this.stopBtn = document.getElementById('stopBtn');
		this.restartBtn = document.getElementById('restartBtn');
		this.selectBtn = document.getElementById('selectWorld');
		this.timer = null;
		this.worldN =  getItem('worldIndex') || 0;
	}

	init() {
		this.startBtn.onclick = () => this.start();
		this.stopBtn.onclick = () => this.stop();
		this.restartBtn.onclick = () => this.restart();
		this.selectBtn.addEventListener('change', (e) => 
			this.selectWorld(e.target.value));
	}

	start() {
		if (!this.timer) {
			this.timer = this.run();
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
		this.update(this.worldN);
		this.startBtn.click();
	}

	selectWorld(worldN, update) {
		if (this.timer) {
			this.stopBtn.click();
		}
		this.update(worldN);
		this.worldN = worldN;
		saveItem('worldIndex', worldN);
	}
};