/* describe('BMI_UI - index.html', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
    });
});
*/

describe('BMI_UI - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
    $('#metric_true').click(); //.trigger('click');
    $('#weight').val('90');
    $('#height').val('186');
    $('#calculate').trigger('click');
  });

  it('expect weight field to show', function() {
    expect($('#weight')).toExist();
  });

  /*
  it('captures weight as 90', function() {
    expect($('#weight')).toEqual('90');
  });


  xit('display BMI Value', function() {
    expect($('#display_value').text()).toBe('Your BMI is 26.01');
  });

  xit('displays BMI Message', function() {
    expect($('#display_message').text()).toBe('and you are Overweight');
  });
  */

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
    $('#imperial_true').click();
    $('#weight_lb').val('170');
    $('#height_ft').val('6');
    $('#height_in').val('3');
    $('#calculate').trigger('click');
  });

  it('display BMI Value', function() {
    expect($('#display_value').text()).toBe('Your BMI is 21.25');
  });

  it('displays BMI Message', function() {
    expect($('#display_message').text()).toBe('and you are Normal');
  });
});
