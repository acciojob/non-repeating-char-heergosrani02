function firstNonRepeatedChar(str) {
 // Write your code here
	let obj = {};
	for(let i = 0; i < str.length; i++){
		if(obj[str[i]] == null){
			obj[str[i]] = 1;
		}
		else{
			obj[str[i]]++;
		}
	}

	for(let x  in obj){
		if(obj[x] == 1){
			return x; 
		}
	}
}

// const input = prompt("Enter a string"); 
// alert(firstNonRepeatedChar(input)); 
