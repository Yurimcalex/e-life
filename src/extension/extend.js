export default function extend(target, ...parents) {
	const instances = parents.map(constr => new constr());

	Object.assign(target, ...instances);

	instances.forEach(instance => {
		Object.assign(target, getOwnMethProps(instance));
	});
}


function getOwnProtoNames(obj) {
	return Object.getOwnPropertyNames( Object.getPrototypeOf(obj) );
}


function getOwnMethProps(obj) {
	const props = {};
	const names = getOwnProtoNames(obj);
	for (let name of names) {
		if (name === 'constructor') continue;
		props[name] = obj[name];
	}
	return props;
}