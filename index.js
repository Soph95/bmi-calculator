function bmiCalculator() {

  var weight = document.querySelector(".weight").value;
  var height = document.querySelector(".height").value;
  var bmi = weight / Math.pow(height, 2);
  var bmifinal = (Math.round(bmi * 100) / 100).toFixed(1);


  if (weight <= 0 || height <= 0) {
    alert("Please enter valid values");
  }


  if (bmifinal < 18.5) {
    document.querySelector(".result").innerHTML = "Your BMI is " + bmifinal + "," + " so you are classed as underweight.";
  } else if (bmifinal >= 18.5 && bmi <= 24.9) {
    document.querySelector(".result").innerHTML = "Your BMI is " + bmifinal + "," + " so you are classed as normal weight.";
  } else if (bmifinal > 24.9 && bmifinal <= 29.9) {
    document.querySelector(".result").innerHTML = "Your BMI is " + bmifinal + "," + " so you are classed as overweight.";
  } else if (bmifinal >= 30) {
    document.querySelector(".result").innerHTML = "Your BMI is " + bmifinal + "," + " so you are classed as obese.";
  }

}
document.querySelector("button").addEventListener("click", bmiCalculator);

