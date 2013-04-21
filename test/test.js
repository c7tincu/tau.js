(
  function (context) {
    "use strict";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var P_OBJECT = Object.prototype;



/* Tau`:
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

describe("`Tau`:", function () {

  it("… should be defined.", function () {
    assert.isNotTypeOf(Tau, "undefined");
  });

  it("… should be a function.", function () {
    assert.strictEqual(P_OBJECT.toString.call(Tau), "[object Function]");
  });

});



/* `var tau = new Tau();`:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

describe("`var tau = new Tau();`:", function () {

  var tau;

  before(function () {
    tau = new Tau();
  });

  it("… should result in `tau` being defined.", function () {
    assert.isNotTypeOf(tau, "undefined");
  });

  it("… should result in `tau` being an object.", function () {
    assert.strictEqual(tau, Object(tau));
  });

  it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:00:000Z\"`.", function () {
    assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:00:000Z");
  });

  it("… should result in `tau.isValid()` being `true`.", function () {
    assert.strictEqual(tau.isValid(), true);
  });

});



/* `Tau#getUtcYear()` & `Tau#setUtcYear()`:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

describe("`Tau#getUtcYear()` & `Tau#setUtcYear()`:", function () {

  /* Tests for the minimum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcYear(0, true);`:", function () {
    var tau = new Tau(); tau.setUtcYear(0, true);
    it("… should result in `tau.getUtcYear()` being equal to `0`.", function () {
      assert.strictEqual(tau.getUtcYear(), 0);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"0000-01-01T00:00:000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "0000-01-01T00:00:000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for a common value. */
  describe("`var tau = new Tau(); tau.setUtcYear(2013, true);`:", function () {
    var tau = new Tau(); tau.setUtcYear(2013, true);
    it("… should result in `tau.getUtcYear()` being equal to `2013`.", function () {
      assert.strictEqual(tau.getUtcYear(), 2013);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-01T00:00:000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "2013-01-01T00:00:000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for the maximum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcYear(9999, true);`:", function () {
    var tau = new Tau(); tau.setUtcYear(9999, true);
    it("… should result in `tau.getUtcYear()` being equal to `9999`.", function () {
      assert.strictEqual(tau.getUtcYear(), 9999);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"9999-01-01T00:00:000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "9999-01-01T00:00:000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for inferior overflow. */
  describe("`var tau = new Tau(); tau.setUtcYear(- 1, true);`:", function () {
    var tau = new Tau(); tau.setUtcYear(- 1, true);
    it("… should result in `tau.getUtcYear()` being equal to `9999`.", function () {
      assert.strictEqual(tau.getUtcYear(), 9999);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"9999-01-01T00:00:000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "9999-01-01T00:00:000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for superior overflow. */
  describe("`var tau = new Tau(); tau.setUtcYear(10000, true);`:", function () {
    var tau = new Tau(); tau.setUtcYear(10000, true);
    it("… should result in `tau.getUtcYear()` being equal to `0`.", function () {
      assert.strictEqual(tau.getUtcYear(), 0);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"0000-01-01T00:00:000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "0000-01-01T00:00:000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

});



/* `Tau#getUtcMonth()` & `Tau#setUtcMonth()`:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

describe("`Tau#getUtcMonth()` & `Tau#setUtcMonth()`:", function () {

  /* Tests for the minimum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcMonth(0, true);`:", function () {
    var tau = new Tau(); tau.setUtcMonth(0, true);
    it("… should result in `tau.getUtcMonth()` being equal to `0`.", function () {
      assert.strictEqual(tau.getUtcMonth(), 0);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:00:000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:00:000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for a common value. */
  describe("`var tau = new Tau(); tau.setUtcMonth(4, true);`:", function () {
    var tau = new Tau(); tau.setUtcMonth(4, true);
    it("… should result in `tau.getUtcMonth()` being equal to `4`.", function () {
      assert.strictEqual(tau.getUtcMonth(), 4);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-05-01T00:00:000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-05-01T00:00:000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for the maximum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcMonth(11, true);`:", function () {
    var tau = new Tau(); tau.setUtcMonth(11, true);
    it("… should result in `tau.getUtcMonth()` being equal to `11`.", function () {
      assert.strictEqual(tau.getUtcMonth(), 11);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-12-01T00:00:000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-12-01T00:00:000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for inferior overflow. */
  describe("`var tau = new Tau(); tau.setUtcMonth(- 1, true);`:", function () {
    var tau = new Tau(); tau.setUtcMonth(- 1, true);
    it("… should result in `tau.getUtcMonth()` being equal to `11`.", function () {
      assert.strictEqual(tau.getUtcMonth(), 11);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1969-12-01T00:00:000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1969-12-01T00:00:000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for superior overflow. */
  describe("`var tau = new Tau(); tau.setUtcMonth(12, true);`:", function () {
    var tau = new Tau(); tau.setUtcMonth(12, true);
    it("… should result in `tau.getUtcMonth()` being equal to `0`.", function () {
      assert.strictEqual(tau.getUtcMonth(), 0);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1971-01-01T00:00:000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1971-01-01T00:00:000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

});



/* `Tau#getUtcDate()` & `Tau#setUtcDate()`:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

describe("`Tau#getUtcDate()` & `Tau#setUtcDate()`:", function () {

  /* Tests for the minimum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcDate(1, true);`:", function () {
    var tau = new Tau(); tau.setUtcDate(1, true);
    it("… should result in `tau.getUtcDate()` being equal to `1`.", function () {
      assert.strictEqual(tau.getUtcDate(), 1);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:00:000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:00:000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for a common value. */
  describe("`var tau = new Tau(); tau.setUtcDate(3, true);`:", function () {
    var tau = new Tau(); tau.setUtcDate(3, true);
    it("… should result in `tau.getUtcDate()` being equal to `3`.", function () {
      assert.strictEqual(tau.getUtcDate(), 3);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-03T00:00:000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-03T00:00:000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for the maximum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcDate(31, true);`:", function () {
    var tau = new Tau(); tau.setUtcDate(31, true);
    it("… should result in `tau.getUtcDate()` being equal to `31`.", function () {
      assert.strictEqual(tau.getUtcDate(), 31);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-31T00:00:000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-31T00:00:000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for inferior overflow. */
  describe("`var tau = new Tau(); tau.setUtcDate(0, true);`:", function () {
    var tau = new Tau(); tau.setUtcDate(0, true);
    it("… should result in `tau.getUtcDate()` being equal to `31`.", function () {
      assert.strictEqual(tau.getUtcDate(), 31);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1969-12-31T00:00:000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1969-12-31T00:00:000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for superior overflow. */
  describe("`var tau = new Tau(); tau.setUtcDate(32, true);`:", function () {
    var tau = new Tau(); tau.setUtcDate(32, true);
    it("… should result in `tau.getUtcDate()` being equal to `1`.", function () {
      assert.strictEqual(tau.getUtcDate(), 1);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-02-01T00:00:000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-02-01T00:00:000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

});



/* `Tau.VERSION`:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

describe("`Tau.VERSION`:", function () {

  it("… should be defined.", function () {
    assert.isNotTypeOf(Tau.VERSION, "undefined");
  });

  it("… should be a string.", function () {
    assert.strictEqual(P_OBJECT.toString.call(Tau.VERSION), "[object String]");
  });

});



/* `var Upsilon = Tau.noConflict();`:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

describe("`var Upsilon = Tau.noConflict();`:", function () {

  var Upsilon;

  before(function () {
    Upsilon = Tau.noConflict();
  });

  it("… should restore `Tau` to its previous owner.", function () {
    assert.strictEqual(Tau, "previous value");
  });

  it("… should result in `Upsilon` being defined.", function () {
    assert.isNotTypeOf(Upsilon, "undefined");
  });

  it("… should result in `Upsilon` being a function.", function () {
    assert.strictEqual(P_OBJECT.toString.call(Upsilon), "[object Function]");
  });

});



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
)(this);
