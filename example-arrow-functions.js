var names =['Brian', 'Julie', 'Jen'];
/*
names.forEach(function (name) {
	console.log('forEach', name);
});
 
names.forEach((name) => {
	console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Brian'));
*/
/*
var person = {
	name: 'Brian',
	greet: function () {
		names.forEach((name) => {
			console.log(this.name + ' says hi to ' + name)
		});
	}
};

person.greet();
*/

//Challenge Area
function add(a, b) {
	return a + b;
}

var addStatement = (a,b) => {
	return a + b;
};

var addExpression = (a,b) => a + b;

console.log(addExpression(3, -2));


