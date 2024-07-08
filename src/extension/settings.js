export default class Settings {
	constructor(description) {
		this.menu = document.querySelector('.settings ul');
		this.description = description;

		this.menu.addEventListener('click', (e) => {
			const action = e.target.dataset.action;
			if (action) {
				this[action](e);
			}
		});
	}

	toggleDescriptionVisibility(e) {
		const li = e.target;
		
		if (this.description.classList.contains('none')) {
			li.textContent = 'Hide description';
		} else {
			li.textContent = 'Show description';
		}

		this.description.classList.toggle('none');
	}
}