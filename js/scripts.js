// -----------------BACK END-----------------

var counterArray = [];
var parentArray = [];
var checkAgain =[];
var finalArray = [];

// "counter" function takes in value from input and creates an array from 0 to that input value //

var counter = function(input) {
  for (var checkNumber = 0; checkNumber <= input; checkNumber++) {
    counterArray.push(checkNumber);
  }
}
// "arrayPlacer" function pushes every element within counterArray into "parentArray" then pushes "parentArray" into the "checkAgain" array, then "parentArray" is reset to empty. This creates an array of arrays which will then be run through a loop within the "arrayChecker" function //

var arrayPlacer = function(array) {
  for (var i = 0; i < array.length; i++) {
    var pushArray = array[i];
    parentArray.push(pushArray);
    checkAgain.push(parentArray);
    parentArray = [];
  }
}

// "arrayChecker" cycles through each array within "checkAgain", changes some of those arrays to strings and keeps some of them as numeric values, then passes them through a conditional statement //

var arrayChecker = function(checkAgain) {
  for (var i = 0; i < checkAgain.length; i++) {
    var numberSelect = checkAgain[i];
    var stringSelect = numberSelect.toString();
    if (numberSelect > 2 && numberSelect % 3 === 0) {
      finalArray.push(" I'm sorry " + "<span class='name'></span>" + "," + " I'm afraid I can't do that ");
    } else if (stringSelect.indexOf("1") !== -1) {
      finalArray.push(" Boop! ");
    } else if (stringSelect.indexOf("0") !== -1) {
      finalArray.push(" Beep! ");
    } else {
      finalArray.push(" " + numberSelect + " ");
    }
  }
}
// --------------FRONT END-----------------------

$(document).ready(function() {
  $(".dave").hide();
  $("#form1").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#input1").val());
    var input2 = $("#input2").val();
    counter(input);
    arrayPlacer(counterArray);
    arrayChecker(checkAgain);
    $(".dave").show();
    $("#hal").hide();
    $("#output").append(finalArray);
    $(".name").text(input2);


  });

});
