describe('BMI_UI - index-imp.html', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index-imp.html');
        $.holdReady(false);
    });
});

describe('BMI_UI - index-imp.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index-imp.html');
    $.holdReady(false);
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
