import bouncingCritterImg from './img/ghost.png';
import wallFollowerImg from './img/ghost1.png';
import stoneImg from './img/granite.png';
import plantImg from './img/plant.png';
import plantEaterImg from './img/cow.png';

export default class SymbolMapper {
	constructor(cells) {
		this.cells = [...cells];
		this.icons = {
			'#': stoneImg,
			'o': bouncingCritterImg,
			'w': wallFollowerImg,
			'*': plantImg,
			'0': plantEaterImg,
			'D': plantEaterImg,
			'E': plantEaterImg
		};

		this.map();
	}

	_createImgStr(src) {
		return `<img src="${src}"/>`;
	}

	map() {
		this.cells.forEach(cell => {
			const ch = cell.textContent;
			if (ch in this.icons) {
				cell.innerHTML = this._createImgStr(this.icons[ch]);
			}
		});
	}

	render() {
		const cells = this.cells.filter(cell => cell.textContent !== '#');
		this.map(cells);
	}
}