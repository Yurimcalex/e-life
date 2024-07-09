import ghost from './img/ghost.png';
import ghost1 from './img/ghost1.png';
import stone from './img/granite.png';
import plant from './img/plant.png';
import cow0 from './img/cow0.png';
import cow1 from './img/cow1.png';
import cow2 from './img/cow2.png';
import cow3 from './img/cow3.png';
import cow4 from './img/cow4.png';
import sheep1 from './img/sheep1.png';
import sheep2 from './img/sheep2.png';


class SymbolMapper {
	constructor(cells) {
		this.cells = cells && [...cells];
		this.icons = {
			'#': stone,
			'o': ghost,
			'w': ghost1,
			'*': plant,
			'0': cow0,
			'A': cow1,
			'B': cow2,
			'C': cow3,
			'D': cow4,
			'E': sheep1,
			'F': sheep2
		};

		if (cells) this.map();
	}

	_createImgStr(src) {
		return `<img src="${src}"/>`;
	}

	map() {
		this.cells.forEach(cell => {
			const ch = cell.dataset.text;
			if (ch in this.icons) {
				cell.innerHTML = this._createImgStr(this.icons[ch]);
			}
		});
	}

	getIconUrl(ch) {
		return this.icons[ch];
	}

	render() {
		const cells = this.cells.filter(cell => cell.dataset.text !== '#');
		this.map(cells);
	}
}

export default SymbolMapper;