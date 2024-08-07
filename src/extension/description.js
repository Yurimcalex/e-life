import SymbolMapper from './symbolMapper.js';

export default class Description {
	constructor() {
		this.container = document.querySelector('.descr-cont');
		this.mapper = new SymbolMapper();
	}

	show(description) {
		const data = `
			<h3><em>Description</em><span>world #${description.n}</span></h3>
			<p>${description.world}</p>
			<div>
				${description.legend.reduce((html, [ch, descr]) => {
					html += `<p>Symbol <span>${ch}</span> Icon <img src="${this.mapper.getIconUrl(ch)}"/> - ${this._addLineBreak(descr)}</p>`;
					return html;
				}, '')}
			</div>
		`;
		this.container.innerHTML = data;
	}

	_addLineBreak(descr) {
		return descr.trim().split('\n').map(str => {
			if (str.indexOf('<em>') !== -1) return '<br/>' + str;
			return str;
		}).join('');
	}

	_log(description) {
		console.log(`------------- world #${description.n} -------------`);
		console.log(description.world);
		description.legend.forEach(([ch, descr]) => console.log(`${ch} - ${descr}`));
	}
}