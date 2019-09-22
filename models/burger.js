// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  //creates burgers
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
 
    vals = titleText(vals);
  
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    

    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  //added delete 
  delete: function(objColVals, condition, cb) {
    orm.delete("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

//
//Function to convert text entered into title text format for example ben's burger will become Ben's Burger
function titleText(name){
  //convert string into an array of lowercase letters
  var string = name[0].toLowerCase();
  var textEntered = string.split("");
  // Identify the letters that should be capitalized
  tempStringArray = [];
  tempStringArray.push(textEntered[0].toUpperCase());
  for (let i = 1; i < textEntered.length; i++) {
    if (textEntered[i] ===" "){
      tempStringArray.push(textEntered[i])
      tempStringArray.push(textEntered[i+1].toUpperCase());
      i++
    }else{
     tempStringArray.push(textEntered[i]);
    }

    
    
  }
  //Return the array of characters back string that is occupies element zero of an array and return the updated array element
  temp =[]
  temp[0] = tempStringArray.join("");
  name =temp
  return name;
 
}

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
