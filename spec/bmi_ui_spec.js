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
    $('#metric_true').click().trigger('click');
    //$("input").val("metric");
    $('#weight').val('90');
    $('#height').val('186');
    $('#calculate').trigger('click');
  });

  it('display BMI Value', function() {
    expect($('#display_value').text()).toBe('Your BMI is 26.01');
  });

  it('displays BMI Message', function() {
    expect($('#display_message').text()).toBe('and you are Overweight');
  });

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
    //$('input[name=measure]:checked').val() = 'imperial';
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
