(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#markovmaker', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  
  

  module('jQuery.markovmaker');

  test('is markovmaker', function() {
    expect(2);
    strictEqual($.markovmaker('this is the beginning'), 'this is the beginning.', 'should be markovmaker');
    strictEqual($.markovmaker('this is the beginning',{punctuation: '!'}), 'this is the beginning!', 'should be thoroughly markovmaker');
  });

  

}(jQuery));
