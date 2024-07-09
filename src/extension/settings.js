export default class Settings {
	constructor(description, appScreen) {
		this.menu = document.querySelector('.settings ul');
		this.description = description;
		this.appScreen = appScreen;

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

	toggleCrittersDisplay(e) {
		this.appScreen.toggleDisplayMethod();
		const text = e.target.textContent;
		if (text === 'Critters as icons') {
			e.target.textContent = 'Critters as symbols';
		} else {
			e.target.textContent = 'Critters as icons';
		}
	}
}