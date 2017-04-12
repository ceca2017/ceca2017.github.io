describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight_lb: 170, height_in: 75});
  });

  it("should have weight of 170 lb", function() {
    expect(person.weight_lb).toEqual(170);
  });

  it("should have a height of 75 in", function() {
    expect(person.height_in).toEqual(75);
  });

  it("should calculate BMI value", function() {
    person.calculate_bmi_imp();
    expect(person.bmiValue).toEqual(21.25);
  });

  it("should have a BMI Message", function() {
    person.calculate_bmi_imp();
    expect(person.bmiMessage).toEqual("Normal");
  })
});
