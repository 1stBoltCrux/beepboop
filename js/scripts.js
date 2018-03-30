var displayArray = [];

var beepbooper = function(number) {
  for (var i = 0; i < number.length; i++) {
    var checkNumber = parseInt(number[i]);
    console.log(checkNumber);
    debugger;

    if (checkNumber !== 0 && checkNumber % 3 === 0) {
      $("#output").append("<li>" + "I'm sorry Dave, I'm afraid I can't do that.");
    } else {

    }

  }



  }


$(document).ready(function() {
  $("#form1").submit(function(event) {
    var input = $("#input1").val();
    inputArray = input.split("");
    beepbooper(inputArray);
    console.log(inputArray);

  event.preventDefault();
});

});
