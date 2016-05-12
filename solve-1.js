var rect = require('./ractangle-1');

function solveRectangle(l, b) {
	console.log("Area is ", rect.area(l, b));
	console.log("Perimeter is ", rect.perimeter(l, b));
}

solveRectangle(5, 9);
solveRectangle(1, 9);
solveRectangle(5, 2);
