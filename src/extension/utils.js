export function replaceChar(plan, from, to) {
	return plan.map(line => {
		return Array.from(line).map(ch => ch === from ? to : ch).join('');
	});
};


export function randomPlaceChar(plan, ch) {
	let width = plan[0].length;
	let height = plan.length;

	while (true) {
		let x = randomInteger(1, width - 1);
		let y = randomInteger(1, height - 1);

		if (plan[y][x] === ' ') {
			return placeChar(plan, ch, [x, y]);
		}
	}
};


export function placeChar(plan, ch, point) {
	let [x, y] = point;
	let row = plan[y].split('');
	row.splice(x, 1, ch);
	plan[y] = row.join('');
	return plan;
};


function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}