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

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.markovmaker(), this.elems, 'should be chainable');
  });

  test('is markovmaker', function() {
    expect(1);
    strictEqual(this.elems.markovmaker().text(), 'markovmaker0markovmaker1markovmaker2', 'should be markovmaker');
  });

  module('jQuery.markovmaker');

  test('is markovmaker', function() {
    expect(2);
    strictEqual($.markovmaker(null,'this is the beginning'), 'this is the beginning.', 'should be markovmaker');
    strictEqual($.markovmaker({punctuation: '!'},'this is the beginning'), 'this is the beginning!', 'should be thoroughly markovmaker');
  });

  module(':markovmaker selector', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is markovmaker', function() {
    expect(1);
    // Use deepEqual & .get() when comparing jQuery objects.
    deepEqual(this.elems.filter(':markovmaker').get(), this.elems.last().get(), 'knows markovmaker when it sees it');
  });

}(jQuery));
