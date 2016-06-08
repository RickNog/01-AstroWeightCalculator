// This function takes the id's "planets" and "weight" and multiplies them providing the result.
function answer() {
	var planets = document.getElementById("planets").value;
	var weight = document.getElementById("weight").value;
	var resultWeight = planets * weight;
	document.getElementById("displayResult").innerHTML = "Your weight would be " + resultWeight + "lbs";

}