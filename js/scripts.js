var counterArray = [];
var checkNumber = [];
var fup = [];
console.log(fup);
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
      checkNumber.push("I'm sorry Dave, I'm afraid I can't do that");
    } else if (checkNumber2 === 1) {
      checkNumber.push("Beep!");
    } else if (checkNumber2 === 0) {
      checkNumber.push("Boop!");
    } else {
      checkNumber.push(checkNumber2);
    }
  }
}

var furtherBeepBooper = function(stringArray) {
  for (var i = 0; i < stringArray.length; i++) {
    var oneZero = stringArray[i];
    if (oneZero.charAr(0) === "1" ) {
      fup.push("Beep!");
    } else {

    }
  }
}

  $(document).ready(function() {
    $("#form1").submit(function(event) {
      var input = parseInt($("#input1").val());

      counter(input);
      beepBooper(counterArray);

debugger;
      var stringCheckNumber = checkNumber.toString();
      console.log(stringCheckNumber);
      var stringArray = stringCheckNumber.split(",");
      furtherBeepBooper(stringArray);


      $("#output").append(checkNumber);

      event.preventDefault();
    });

  });
