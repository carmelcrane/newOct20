var student = {
  name: 'Brandon',
  favoriteArtSpace: 'Gray Area',
  mealsToday: [
    'eggs and yogurt',
    'fajitas',
    'sandwich'

  ]
};
console.log(student.mealsToday[2]);
var student = function (name, mealsArray){
  this.name = name;
  this.mealsToday= mealsArray;
};

  student.prototype.favoriteArtSpace = 'Gray Area';
  //references all students like GA
  //this.favoriteArtSpace = 'Gray Area'; //staements end with ; he is eleminating the art space distinction



var jeff = new Student ( 'Jeff', ['chicken', 'oatmeal cream pie']);

student.prototype.getLastMeal = function (){
  var numberOfMeals = this.mealsToday.length;
  var lastMeal = this.mealsToday[numberOfMeals -1];
  return lastMeal;
};
console.log (jeff.mealsToday[1]);

var getLastMeal = function(){

}
//prototype is an object like a shared suitcase - things you share as a 'gang'
//class is like a blueprint


|
