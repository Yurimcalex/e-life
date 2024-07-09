import Painter from './painter.js';
import SymbolMapper from './symbolMapper.js';

let displayMethod = Painter;

export default class Table {
	constructor() {
		this.container = document.querySelector('.view');
		this.table = null;
		this.data = '';
		this.displayEnhancer = null;
	}

	createTable(data) {
		const table = document.createElement('table');
		table.className = 'table';
		table.innerHTML = `
			${data.split('\n').reduce((acc, row) => {
				return acc + `<tr>
					${row.split('').reduce((acc, cell) => {
						return acc + `<td data-text=${cell}>${cell}</td>`;
					}, '')}
				</tr>` 
			}, '')}
		`;
		
		this.table = table;
		this.data = data;
		this.container.append(table);

		this.displayEnhancer = new displayMethod(table.querySelectorAll('td'));
	}

	updateTable(data) {
		const cellsToUpdate = this._getCellsToUpdate(this.data, data);
		const rows = this.table.rows;
		cellsToUpdate.forEach(cd => {
			const {row, col, text} = cd;
			const td = rows[row].cells[col];
			td.textContent = text;
			td.setAttribute('data-text', text);
		});
		this.data = data;

		this.displayEnhancer.render();
	}

	toggleDisplayMethod() {
		if (displayMethod === Painter) {
			displayMethod = SymbolMapper;
		} else {
			displayMethod = Painter;
		}

		const cells = this.table.querySelectorAll('td')
		this.displayEnhancer = new displayMethod(cells);
		this.displayEnhancer.render()
	}

	_getCellsToUpdate(prevData, data) {
		let rowInd = 0;
		let colInd = 0;
		let cellsToUpdate = [];

		for (let i = 0; i < data.length; i += 1) {
			if (data[i] !== prevData[i]) {
				cellsToUpdate.push({
					row: rowInd,
					col: colInd,
					text: data[i]
				});
			}

			colInd += 1;

			if (data[i] === '\n') {
				rowInd += 1;
				colInd = 0;
			}
		}

		return cellsToUpdate;
	}

	remove() {
		this.table.remove();
	}

	render(data) {
		if (!this.table) {
			this.createTable(data);
		} else {
			this.updateTable(data);
		}
	}
}