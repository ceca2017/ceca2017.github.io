function Person(attr) {
    var w;
    var h;
    if (attr['measure_type'] == 'metric') {
      w = attr['weight'];
      h = attr['height'];
    }
    else if (attr['measure_type'] == 'imperial') {
      w = attr['weight_lb']/2.2046;
      h = (attr['height_ft']*12 + attr['height_in'])*2.54;
    }
    this.weight = w;
    this.height = h;
    //this.weight_lb = attr.weight_lb;
    //this.height_in = attr.height_in;
};

Person.prototype.calculate_bmi = function() {
    calculator = new BMICalculator();
    calculator.metric_bmi(this);
}

/* Person.prototype.calculate_bmi_imp = function() {
    calculator = new BMICalculator();
    calculator.imp_bmi(this);
} */
