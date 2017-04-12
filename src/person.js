function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height;
    this.weight_lb = attr.weight_lb;
    this.height_in = attr.height_in;
};

Person.prototype.calculate_bmi = function() {
    calculator = new BMICalculator();
    calculator.metric_bmi(this);
}

Person.prototype.calculate_bmi_imp = function() {
    calculator = new BMICalculator();
    calculator.imp_bmi(this);
}