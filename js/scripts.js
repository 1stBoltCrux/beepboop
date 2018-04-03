// -----------------BACK END-----------------

var counterArray = [];
var checkAgain =[];
var arrayX = [];
var finalArray = [];

var counter = function(input) {
  for (var checkNumber = 0; checkNumber <= input; checkNumber++) {
    counterArray.push(checkNumber);
  }
}
var arrayPlacer = function(array) {
  for (var i = 0; i < array.length; i++) {
    var pushArray = array[i];
    arrayX.push(pushArray);
    checkAgain.push(arrayX);
    arrayX = [];
  }
}

var arrayChecker = function(checkAgain) {
  for (var i = 0; i < checkAgain.length; i++) {
    var arrayArray = checkAgain[i];
    var arrayArray2 = arrayArray.toString();
    if (arrayArray > 2 && arrayArray % 3 === 0) {
      finalArray.push(" I'm sorry " + "<span class='name'></span>" + "," + " I'm afraid I can't do that ");
    } else if (arrayArray2.indexOf("1") !== -1) {
    finalArray.push(" Boop! ");
    } else if (arrayArray2.indexOf("0") !== -1) {
      finalArray.push(" Beep! ");
    } else {
      finalArray.push(" " + arrayArray + " ");
    }
  }
}
// --------------FRONT END-----------------------

  $(document).ready(function() {
    $("#form1").submit(function(event) {
        event.preventDefault();
      var input = parseInt($("#input1").val());
      var input2 = $("#input2").val();
      counter(input);
      arrayPlacer(counterArray);
      arrayChecker(checkAgain);

      $("#output").append(finalArray);
      $(".name").text(input2);


    });

  });
