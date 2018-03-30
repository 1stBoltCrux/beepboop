var displayArray = [];


var beepbooper = function(number) {
  for (var i = 0; i < number.length; i++) {
    var checkNumber = parseInt(number[i]);
    console.log(checkNumber);
    debugger;

    if (checkNumber !== 0 && checkNumber % 3 === 0) {
      displayArray.push("I'm sorry Dave, I'm afraid I can't do that");
    } else if (checkNumber === 1) {
      displayArray.push("Beep!");
    } else if (checkNumber === 0) {
      displayArray.push("Boop");
    } else {
      displayArray.push(checkNumber);
    }

    }

  }






$(document).ready(function() {
  $("#form1").submit(function(event) {
    var input = $("#input1").val();
    inputArray = input.split("");
    beepbooper(inputArray);
    console.log(inputArray);
    $("#output").append(displayArray)

  event.preventDefault();
});

});
