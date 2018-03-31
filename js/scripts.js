var counterArray = [];
// var checkNumber = [];
var checkAgain =[];
var arrayX = [];
var finalArray = [];
console.log(finalArray);
console.log(checkAgain);
// var furtherArray =[];
var counter = function(input) {
  for (var checkNumber = 0; checkNumber <= input; checkNumber++) {
    counterArray.push(checkNumber);
    console.log(checkNumber);
  }
}


// var beepBooper = function(numberList) {
//
//   for (var i = 0; i < numberList.length; i++) {
//     var checkNumber2 = numberList[i];
//       console.log(checkNumber2);
//     if (checkNumber2 !== 0 && checkNumber2 % 3 === 0) {
//       checkNumber.push("I'm sorry Dave, I'm afraid I can't do that");
//     } else {
//       checkNumber.push(checkNumber2);
//     }
//   }
// }
var arrayPlacer = function(array) {
  debugger;
  for (var i = 0; i < array.length; i++) {
    var pushArray = array[i];
    arrayX.push(pushArray);
    console.log(pushArray);
    checkAgain.push(arrayX);
    console.log(checkAgain);
    arrayX = [];


  }
}

var arrayChecker = function(checkAgain) {
  debugger;
  for (var i = 0; i < checkAgain.length; i++) {
    var arrayArray = checkAgain[i];
    var arrayArray2 = arrayArray.toString();
    if (arrayArray > 2 && arrayArray % 3 === 0) {
      finalArray.push(" I'm sorry Dave, I'm afraid I can't do that ");
    } else if (arrayArray2.indexOf("1") !== -1) {
    finalArray.push(" Boop! ");
  } else if (arrayArray2.indexOf("0") !== -1) {
      finalArray.push(" Beep! ");
    } else {
      finalArray.push(arrayArray);

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
        event.preventDefault();
      var input = parseInt($("#input1").val());

      counter(input);
      // beepBooper(counterArray);
      // console.log(checkNumber);
      arrayPlacer(counterArray);
      arrayChecker(checkAgain);
      // var stringNumber = checkNumber.toString();
      // var final = stringNumber.split(",")
      // console.log(final);
      // furtherBeepBooper(checkNumber)

      var outputString = finalArray
      $("#output").append(finalArray);


    });

  });
