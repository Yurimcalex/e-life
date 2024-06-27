export function replaceChar(plan, from, to) {
	return plan.map(line => {
		return Array.from(line).map(ch => ch === from ? to : ch).join('');
	});
};