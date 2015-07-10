//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age) {
	this.name = name;
	this.age = age;
}


//Now create three instances of Person with data you make up

  //code here
var superman = new Person("Clark", "35");
var batman = new Person("Bruce", "34");
var sharkbait = new Person("Nemo", "3");

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.sayName = function(id) {
	alert(id);
}

Person.sayName(superman.name);