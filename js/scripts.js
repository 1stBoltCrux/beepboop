var displayArray = [];

var counter = function(input) {
  for (var checkNumber = 0; checkNumber <= input; checkNumber++) {
    if  (checkNumber !== 0 && checkNumber % 3 === 0) {
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


// var beepbooper = function(number) {
//   for (var i = 0; i < number.length; i++) {
//     var checkNumber = parseInt(number[i]);
//     console.log(checkNumber);


  //   if (checkNumber !== 0 && checkNumber % 3 === 0) {
  //     displayArray.push("I'm sorry Dave, I'm afraid I can't do that");
  //   } else if (checkNumber === 1) {
  //     displayArray.push("Beep!");
  //   } else if (checkNumber === 0) {
  //     displayArray.push("Boop");
  //   } else {
  //     displayArray.push(checkNumber);
  //   }
  //
  //   }
  //
  // }






$(document).ready(function() {
  $("#form1").submit(function(event) {
    var input = parseInt($("#input1").val());

    counter(input);
    // beepbooper();
    console.log(input);
    $("#output").append(displayArray);

  event.preventDefault();
});

});
