const user = {
	name: "Andriy",

	sayHello() {
		console.log(`hello my name is ${this.name}`);
	},

	test: {
		name: {
			example: "example test 123",
		},
	},
};

// const copy = JSON.parse(JSON.stringify(user));
// console.log("copy", copy);
// console.log("copy", copy === user);

const copy = Object.assign({}, user);
// console.log("copy", copy);
// console.log("copy", copy.test.name === user.test.name);

copy.test.name.example = false;
console.log("copy", copy);
console.log("user", user);

// lodash.deepclone побудований на рекурсії для глибокого клонування об'єкту
