export default class Description {
	constructor() {
		this.container = document.querySelector('.descr-cont');
	}

	show(description) {
		const data = `
			<h3>world #${description.n}</h3>
			<p>${description.world}</p>
			<div>
				${description.legend.reduce((html, [ch, descr]) => 
					html + `<p><span>${ch}</span> - ${descr}</p>`, '')}
			</div>
		`;
		this.container.innerHTML = data;
	}

	_log(description) {
		console.log(`------------- world #${description.n} -------------`);
		console.log(description.world);
		description.legend.forEach(([ch, descr]) => console.log(`${ch} - ${descr}`));
	}
}