export default class Painter {
	constructor(tds) {
		this.tds = tds;
		this.colors = {
			'#': 'black',
			'o': 'gray',
			'*': 'green',
			'0': 'brown',
			'D': 'brown',
			'E': 'brown'
		};

		this.tds.forEach(td => this.paintTd(td));
	}

	paintTd(td) {
		const key = td.textContent;
		if (key in this.colors) {
			td.style.color = this.colors[key];
		}
	}

	paint(data) {
		this.tds.forEach(td => {
			td.style.color = '';
			this.paintTd(td);
		});
	}
}