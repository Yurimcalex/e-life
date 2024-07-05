export default class Table {
	constructor() {
		this.container = document.querySelector('.view');
		this.table = null;
		this.data = '';
		this.coloredCells = null;
		this.colors = {
			'#': 'black',
			'o': 'gray',
			'*': 'green',
			'0': 'brown',
			'D': 'brown',
			'E': 'brown'
		};
	}

	createTable(data) {
		const table = document.createElement('table');
		table.className = 'table';
		table.innerHTML = `
			${data.split('\n').reduce((acc, row) => {
				return acc + `<tr>
					${row.split('').reduce((acc, cell) => {
						return acc + `<td>${cell}</td>`;
					}, '')}
				</tr>` 
			}, '')}
		`;
		
		this.table = table;
		this.data = data;
		this.container.append(table);
		this._paint();
	}

	updateTable(data) {
		const cellsToUpdate = this._getCellsToUpdate(this.data, data);
		const rows = this.table.rows;
		const cellsToColor = [];
		cellsToUpdate.forEach(cd => {
			const {row, col, text} = cd;
			const td = rows[row].cells[col];
			td.textContent = text;
			cellsToColor.push(td);
		});
		this.data = data;
		this.coloredCells.forEach(td => td.style.color = '');
		this._paint(cellsToColor);
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

	_paint(cellsToColor) {
		const coloredCells = [];
		const colors = this.colors;
		if (!cellsToColor) {
			const tds = this.table.querySelectorAll('td');
			Array.from(tds).forEach(td => {
				const key = td.textContent;
				if (key in colors) {
					td.style.color = colors[key];
					coloredCells.push(td);
				}
			});
			
		} else {
			cellsToColor.forEach(td => {
				const key = td.textContent;
				if (key in colors) {
					td.style.color = colors[key];
					coloredCells.push(td);
				}
			});
		}
		this.coloredCells = coloredCells;
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