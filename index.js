function bmiCalculator() {

  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var bmi = weight / Math.pow(height, 2);
  var bmifinal = (Math.round(bmi * 100) / 100).toFixed(1);


  if (weight <= 0 || height <= 0) {
    alert("Please enter valid values");
    return;
  }


  if (bmifinal < 18.5) {
    document.getElementById("result").innerHTML = "Your BMI is " + bmifinal + "," + " so you are classed as underweight.";
  } else if (bmifinal >= 18.5 && bmi <= 24.9) {
    document.getElementById("result").innerHTML = "Your BMI is " + bmifinal + "," + " so you are classed as normal weight.";
  } else if (bmifinal > 24.9 && bmifinal <= 29.9) {
    document.getElementById("result").innerHTML = "Your BMI is " + bmifinal + "," + " so you are classed as overweight.";
  } else if (bmifinal >= 30) {
    document.getElementById("result").innerHTML = "Your BMI is " + bmifinal + "," + " so you are classed as obese.";
  }

}
document.querySelector("button").addEventListener("click", bmiCalculator);
