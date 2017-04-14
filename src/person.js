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
};

Person.prototype.calculate_bmi = function() {
    calculator = new BMICalculator();
    calculator.metric_bmi(this);
};
