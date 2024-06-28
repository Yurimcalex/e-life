export function saveItem(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
};

export function getItem(key) {
	let item = localStorage.getItem(key);
	if (item) return JSON.parse(item);
	return null;
}

// let keys = Object.keys(localStorage);
// for(let key of keys) {
//   console.log(`${key}: ${localStorage.getItem(key)}`);
// }