function Global(){
	var myVar = 10;

	if(true){
		var myVar = 20;
		console.log("Inside: ", myVar); // 20
	}

	console.log("Outside: ", myVar); // ??
}

function Private(){
	let myLet = 10;

	if(true){
		let myLet = 20;
		console.log("Inside: ", myLet); // 20
	}

	console.log("Outside: ", myLet); // ??
}


Private();