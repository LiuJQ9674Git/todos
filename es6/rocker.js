/*
module.exports = 'ROCK IT!'; 
exports.name = function() { 
  console.log('My name is Lemmy Kilmister'); 
};

module.exports.name=function(){
  console.log('My name is Lemmy Kilmister'); 
};

*/

module.exports = function(name, age) { 
  this.name = name; 
  this.age = age; 
  this.about = function() { 
  console.log(this.name +' is '+ this.age +' years old'); 
  }; 
}; 