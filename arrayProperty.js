//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here
var String = {};

String.reverse = function(str) {
	var reversedStr = "";
	for (var i = str.length - 1; i >=0; i--) {
		reversedStr += str[i];
	}
	return reversedStr;
};

// Alternate way to reverse the string

// String.reverse = function(str) {
// 	var reversedStr = str.split("").reverse().join("");
// 	return reversedStr;
// }

String.reverse("Thor");