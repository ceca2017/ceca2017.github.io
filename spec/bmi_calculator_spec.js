describe("BMICalculator", function() {
    var calculator;
    var person;

    beforeEach(function() {
        person = new Person({weight: 90, height: 186, measure_type: 'metric'});
        calculator = new BMICalculator();
    });

    it("calculates BMI for a person using a metric method", function() {
        calculator.metric_bmi(person);
        expect(person.bmiValue).toEqual(26.01);
    });

});
