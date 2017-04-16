function BMICalculator() {

}

BMICalculator.prototype.metric_bmi = function(obj) {
    var weight = obj.weight;
    var height = obj.height;
    if (weight > 0 && height > 0) {
        var finalBmi = weight / (height / 100 * height / 100);
        obj.bmiValue = parseFloat(finalBmi.toFixed(2));
        setBMIMessage(obj);
    }
};

/* BMICalculator.prototype.imp_bmi = function(obj) {
    var weight = obj.weight_lb;
    var height = obj.height_in;
    if (weight > 0 && height > 0) {
        var finalBmi = (weight * 703) / (height * height);
        obj.bmiValue = parseFloat(finalBmi.toFixed(2));
        setBMIMessage(obj);
    }
}; */


function setBMIMessage(obj){
    if (obj.bmiValue < 18.5) {
        obj.bmiMessage = "Underweight (your BMI is uner 18.5)"
    }
    if (obj.bmiValue >= 18.5 && obj.bmiValue < 25) {
        obj.bmiMessage = "Normal (your BMI is between 18.5 and 25)"
    }
    if (obj.bmiValue >= 25 && obj.bmiValue < 30) {
        obj.bmiMessage = "Overweight (your BMI is between 25 and 30)"
    }
    if (obj.bmiValue >= 30) {
        obj.bmiMessage = "Obese (your BMI is over 30)"
    }
}
