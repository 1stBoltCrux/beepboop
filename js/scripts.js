var displayArray = [];

var beepbooper = function(number) {
  for (var i = 0; i < number.length; i++) {
    var checkNumber = parseInt(number[i];)
    if (checkNumber % 3 === 0); {
      $("#output").append
    }

    console.log(checkNumber);

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
