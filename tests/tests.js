var assert = chai.assert;

suite('temperature', function() {
  setup(function(){
    if (typeof __html__ !== 'undefined') {
      document.body.innerHTML = __html__["tests/testsk.html"];
      original = document.getElementById("original");
      converted = document.getElementById("converted");
      converted2 = document.getElementById("converted2");
    }
  });
  test('32F = 0C', function() {
    original.value = "32F";
    calculate();
    assert.deepEqual(converted.innerHTML, "0.0 Celsius") ;
    assert.deepEqual(converted2.innerHTML, "273.0 Kelvin");
  });

  test('45C = 113.0 Farenheit', function() {
    original.value = "45C";
    calculate();
    assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
    assert.deepEqual(converted2.innerHTML, "318.1 Kelvin");
  });

  test('5X = error', function() {
    original.value = "5X";
    calculate();
    assert.match(converted.innerHTML, /ERROR/);
    assert.match(converted2.innerHTML, /ERROR/);
  });

  test('273.1K = 0C', function() {
    original.value = "273.1k";
    calculate();
    assert.deepEqual(converted.innerHTML, "-0.0 Celsius");
    assert.deepEqual(converted2.innerHTML, "31.9 Farenheit");
  });

});
