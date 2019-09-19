'use strict'

describe('Thermostat', function() {
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase temperature using up', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('can decrease temperature using down', function(){
    thermostat.down();
    expect(thermpstat.temerature).toEqual(19);
  });
});
