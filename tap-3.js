// Declaring Variables

/*
	Declare -> Khai bao
	Variables -> Bien
*/

/*
	Global -> access from anywhere (su dung o bat ky noi nao)
	Private -> access from a place (su dung o moi noi co dinh)
	Changeable -> co the thay doi duoc
*/

var a = 1; // Global, changeable
let b = 2; // Private, changeable
const c = 3; // Private, unchangeable, constant

// Data types

const string = "Hello world!"; // string, text
const number = 10; // number, intenger
const float = 10.4; // number, float
const boolean = true // true, false
const array = [string, number, float, boolean] // Array

//const map = new Map();
/*
	key -> value
*/

//console.log(array.map(a => `${typeof a} -> ${a}`).join("\n"));
console.log(array[2], array[0]); // array[0, 1, 2, 3];

/*
	position a -> 0, 1, 2, 3
	a -> array[0], array[1], array[2], array[3]
	`${typeof a} -> ${a}` -> "string -> Hello world!"
	array.map(a => `${typeof a} -> ${a}`) = ["string -> Hello world!", "number -> 10", "number -> 10.4", "boolean -> true"];
	join("\n"); new line (dong moi, xuong dong);	
*/