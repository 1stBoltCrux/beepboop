var counterArray = [];
var checkNumber = [];
// var furtherArray =[];
var counter = function(input) {
  for (var checkNumber = 0; checkNumber <= input; checkNumber++) {
    counterArray.push(checkNumber);
    console.log(checkNumber);
  }
}

var beepBooper = function(numberList) {
  for (var i = 0; i < numberList.length; i++) {
    var checkNumber2 = numberList[i];
      console.log(checkNumber2);
    if (checkNumber2 !== 0 && checkNumber2 % 3 === 0) {
      checkNumber.push("I'm sorry Dave I'm afraid I can't do that");

    } else if (checkNumber2 === 1 || checkNumber2 % 10 === 1) {
      checkNumber.push("Beep!");

    } else if (checkNumber2 === 0) {
      checkNumber.push("Boop!");
    } else {
      checkNumber.push(checkNumber2);
    }
  }
}

//   var furtherBeepBooper = function(final) {
//   for (var i = 0; i < final.length; i++) {
//     debugger;
//     var checkNumber3 = final[i];
//     var wtf = checkNumber3.toString();
//     var position = (final.length - 1)
//
//     var wtf2 = wtf.charAt(0);
//     console.log(checkNumber3);
//     if (wtf2 == "1") {
//
//     } else {
//       alert("booooo!");
//     }
//   }
// }

  $(document).ready(function() {
    $("#form1").submit(function(event) {
      var input = parseInt($("#input1").val());

      counter(input);
      beepBooper(counterArray);
      // var stringNumber = checkNumber.toString();
      // var final = stringNumber.split(",")
      // console.log(final);
      // furtherBeepBooper(checkNumber)


      $("#output").append(checkNumber);

      event.preventDefault();
    });

  });
