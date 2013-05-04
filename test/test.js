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

  it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:00:00.000Z\"`.", function () {
    assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:00:00.000Z");
  });

  it("… should result in `tau.isValid()` being `true`.", function () {
    assert.strictEqual(tau.isValid(), true);
  });

});



/* `Tau#getUtcYear()` & `Tau#setUtcYear()`:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

describe("`Tau#getUtcYear()` & `Tau#setUtcYear()`:", function () {

  /* Tests for the minimum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcYear(1);`:", function () {
    var tau = new Tau(); tau.setUtcYear(1);
    it("… should result in `tau.getUtcYear()` being equal to `1`.", function () {
      assert.strictEqual(tau.getUtcYear(), 1);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"0001-01-01T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "0001-01-01T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for a common value. */
  describe("`var tau = new Tau(); tau.setUtcYear(2013);`:", function () {
    var tau = new Tau(); tau.setUtcYear(2013);
    it("… should result in `tau.getUtcYear()` being equal to `2013`.", function () {
      assert.strictEqual(tau.getUtcYear(), 2013);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-01T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "2013-01-01T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for the maximum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcYear(9999);`:", function () {
    var tau = new Tau(); tau.setUtcYear(9999);
    it("… should result in `tau.getUtcYear()` being equal to `9999`.", function () {
      assert.strictEqual(tau.getUtcYear(), 9999);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"9999-01-01T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "9999-01-01T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for inferior overflow. */
  describe("`var tau = new Tau(); tau.setUtcYear(0);`:", function () {
    var tau = new Tau(); tau.setUtcYear(0);
    it("… should result in `tau.getUtcYear()` being equal to `9999`.", function () {
      assert.strictEqual(tau.getUtcYear(), 9999);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"9999-01-01T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "9999-01-01T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for superior overflow. */
  describe("`var tau = new Tau(); tau.setUtcYear(10000);`:", function () {
    var tau = new Tau(); tau.setUtcYear(10000);
    it("… should result in `tau.getUtcYear()` being equal to `1`.", function () {
      assert.strictEqual(tau.getUtcYear(), 1);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"0001-01-01T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "0001-01-01T00:00:00.000Z");
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
  describe("`var tau = new Tau(); tau.setUtcMonth(0);`:", function () {
    var tau = new Tau(); tau.setUtcMonth(0);
    it("… should result in `tau.getUtcMonth()` being equal to `0`.", function () {
      assert.strictEqual(tau.getUtcMonth(), 0);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for a common value. */
  describe("`var tau = new Tau(); tau.setUtcMonth(4);`:", function () {
    var tau = new Tau(); tau.setUtcMonth(4);
    it("… should result in `tau.getUtcMonth()` being equal to `4`.", function () {
      assert.strictEqual(tau.getUtcMonth(), 4);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-05-01T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-05-01T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for the maximum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcMonth(11);`:", function () {
    var tau = new Tau(); tau.setUtcMonth(11);
    it("… should result in `tau.getUtcMonth()` being equal to `11`.", function () {
      assert.strictEqual(tau.getUtcMonth(), 11);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-12-01T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-12-01T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for inferior overflow. */
  describe("`var tau = new Tau(); tau.setUtcMonth(- 1);`:", function () {
    var tau = new Tau(); tau.setUtcMonth(- 1);
    it("… should result in `tau.getUtcMonth()` being equal to `11`.", function () {
      assert.strictEqual(tau.getUtcMonth(), 11);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1969-12-01T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1969-12-01T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for superior overflow. */
  describe("`var tau = new Tau(); tau.setUtcMonth(12);`:", function () {
    var tau = new Tau(); tau.setUtcMonth(12);
    it("… should result in `tau.getUtcMonth()` being equal to `0`.", function () {
      assert.strictEqual(tau.getUtcMonth(), 0);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1971-01-01T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1971-01-01T00:00:00.000Z");
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
  describe("`var tau = new Tau(); tau.setUtcDate(1);`:", function () {
    var tau = new Tau(); tau.setUtcDate(1);
    it("… should result in `tau.getUtcDate()` being equal to `1`.", function () {
      assert.strictEqual(tau.getUtcDate(), 1);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for a common value. */
  describe("`var tau = new Tau(); tau.setUtcDate(3);`:", function () {
    var tau = new Tau(); tau.setUtcDate(3);
    it("… should result in `tau.getUtcDate()` being equal to `3`.", function () {
      assert.strictEqual(tau.getUtcDate(), 3);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-03T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-03T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for the maximum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcDate(31);`:", function () {
    var tau = new Tau(); tau.setUtcDate(31);
    it("… should result in `tau.getUtcDate()` being equal to `31`.", function () {
      assert.strictEqual(tau.getUtcDate(), 31);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-31T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-31T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for inferior overflow. */
  describe("`var tau = new Tau(); tau.setUtcDate(0);`:", function () {
    var tau = new Tau(); tau.setUtcDate(0);
    it("… should result in `tau.getUtcDate()` being equal to `31`.", function () {
      assert.strictEqual(tau.getUtcDate(), 31);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1969-12-31T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1969-12-31T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for superior overflow. */
  describe("`var tau = new Tau(); tau.setUtcDate(32);`:", function () {
    var tau = new Tau(); tau.setUtcDate(32);
    it("… should result in `tau.getUtcDate()` being equal to `1`.", function () {
      assert.strictEqual(tau.getUtcDate(), 1);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-02-01T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-02-01T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

});



/* `Tau#setUtcYear()`, `Tau#setUtcMonth()`, and `Tau#setUtcDate()`:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

describe("`Tau#setUtcYear()`, `Tau#setUtcMonth()`, and `Tau#setUtcDate()`:", function () {

  describe("2000:", function () {

    describe("January:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"1999-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "1999-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(0).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(0).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(0).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(0).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(0).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(0).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(0).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(0).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(0).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(0).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(0).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(0).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(0).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(0).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("February:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(1).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(1).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(1).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(1).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(1).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(1).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(1).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(1).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(1).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(1).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(1).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(1).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-03T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-03T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(1).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(1).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("March:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(2).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(2).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(2).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(2).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(2).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(2).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(2).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(2).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(2).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(2).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(2).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(2).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(2).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(2).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("April:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(3).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(3).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(3).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(3).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(3).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(3).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(3).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(3).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(3).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(3).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(3).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(3).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(3).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(3).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("May:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(4).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(4).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(4).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(4).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(4).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(4).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(4).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(4).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(4).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(4).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(4).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(4).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(4).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(4).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("June:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(5).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(5).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(5).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(5).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(5).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(5).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(5).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(5).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(5).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(5).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(5).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(5).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(5).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(5).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("July:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(6).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(6).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(6).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(6).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(6).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(6).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(6).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(6).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(6).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(6).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(6).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(6).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(6).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(6).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("August:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(7).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(7).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(7).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(7).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(7).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(7).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(7).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(7).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(7).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(7).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(7).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(7).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(7).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(7).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("September:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(8).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(8).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(8).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(8).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(8).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(8).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(8).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(8).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(8).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(8).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(8).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(8).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(8).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(8).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("October:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(9).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(9).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(9).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(9).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(9).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(9).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(9).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(9).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(9).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(9).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(9).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(9).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(9).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(9).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("November:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(10).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(10).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(10).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(10).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(10).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(10).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(10).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(10).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(10).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(10).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(10).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(10).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(10).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(10).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("December:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(11).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(11).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(11).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(11).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(11).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(11).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(11).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(11).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(11).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(11).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(11).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(11).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2001-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2001-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(11).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(11).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

  });

  describe("2013:", function () {

    describe("January:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2012-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2012-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(0).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(0).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(0).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(0).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(0).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(0).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(0).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(0).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(0).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(0).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(0).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(0).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(0).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(0).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("February:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(1).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(1).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(1).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(1).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(1).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(1).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(1).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(1).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(1).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(1).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-03T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-03T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(1).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(1).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-04T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-04T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(1).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(1).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("March:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(2).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(2).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(2).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(2).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(2).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(2).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(2).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(2).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(2).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(2).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(2).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(2).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(2).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(2).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("April:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(3).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(3).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(3).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(3).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(3).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(3).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(3).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(3).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(3).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(3).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(3).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(3).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(3).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(3).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("May:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(4).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(4).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(4).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(4).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(4).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(4).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(4).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(4).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(4).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(4).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(4).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(4).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(4).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(4).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("June:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(5).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(5).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(5).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(5).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(5).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(5).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(5).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(5).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(5).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(5).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(5).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(5).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(5).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(5).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("July:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(6).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(6).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(6).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(6).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(6).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(6).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(6).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(6).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(6).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(6).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(6).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(6).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(6).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(6).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("August:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(7).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(7).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(7).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(7).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(7).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(7).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(7).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(7).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(7).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(7).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(7).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(7).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(7).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(7).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("September:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(8).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(8).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(8).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(8).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(8).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(8).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(8).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(8).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(8).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(8).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(8).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(8).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(8).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(8).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("October:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(9).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(9).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(9).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(9).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(9).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(9).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(9).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(9).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(9).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(9).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(9).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(9).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(9).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(9).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("November:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(10).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(10).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(10).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(10).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(10).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(10).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(10).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(10).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(10).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(10).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(10).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(10).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(10).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(10).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("December:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(11).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(11).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(11).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(11).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(11).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(11).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(11).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(11).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(11).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(11).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(11).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(11).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2014-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2014-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(11).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(11).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

  });

  describe("2016:", function () {

    describe("January:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2015-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2015-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(0).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(0).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(0).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(0).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(0).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(0).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(0).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(0).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(0).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(0).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(0).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(0).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(0).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(0).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("February:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(1).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(1).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(1).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(1).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(1).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(1).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(1).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(1).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(1).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(1).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(1).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(1).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-03T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-03T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(1).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(1).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("March:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(2).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(2).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(2).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(2).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(2).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(2).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(2).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(2).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(2).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(2).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(2).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(2).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(2).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(2).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("April:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(3).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(3).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(3).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(3).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(3).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(3).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(3).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(3).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(3).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(3).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(3).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(3).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(3).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(3).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("May:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(4).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(4).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(4).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(4).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(4).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(4).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(4).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(4).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(4).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(4).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(4).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(4).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(4).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(4).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("June:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(5).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(5).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(5).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(5).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(5).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(5).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(5).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(5).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(5).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(5).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(5).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(5).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(5).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(5).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("July:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(6).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(6).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(6).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(6).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(6).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(6).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(6).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(6).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(6).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(6).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(6).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(6).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(6).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(6).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("August:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(7).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(7).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(7).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(7).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(7).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(7).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(7).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(7).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(7).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(7).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(7).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(7).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(7).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(7).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("September:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(8).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(8).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(8).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(8).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(8).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(8).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(8).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(8).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(8).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(8).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(8).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(8).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(8).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(8).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("October:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(9).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(9).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(9).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(9).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(9).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(9).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(9).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(9).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(9).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(9).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(9).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(9).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(9).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(9).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("November:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(10).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(10).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(10).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(10).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(10).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(10).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(10).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(10).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(10).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(10).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(10).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(10).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(10).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(10).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("December:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(11).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(11).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(11).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(11).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(11).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(11).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(11).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(11).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(11).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(11).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(11).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(11).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2017-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2017-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(11).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(11).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

  });

  describe("2100:", function () {

    describe("January:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2099-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2099-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(0).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(0).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(0).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(0).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(0).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(0).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(0).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(0).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(0).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(0).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(0).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(0).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(0).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(0).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("February:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(1).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(1).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(1).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(1).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(1).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(1).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(1).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(1).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(1).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(1).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-03T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-03T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(1).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(1).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-04T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-04T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(1).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(1).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("March:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(2).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(2).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(2).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(2).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(2).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(2).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(2).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(2).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(2).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(2).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(2).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(2).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(2).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(2).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("April:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(3).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(3).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(3).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(3).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(3).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(3).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(3).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(3).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(3).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(3).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(3).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(3).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(3).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(3).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("May:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(4).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(4).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(4).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(4).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(4).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(4).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(4).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(4).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(4).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(4).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(4).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(4).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(4).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(4).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("June:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(5).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(5).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(5).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(5).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(5).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(5).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(5).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(5).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(5).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(5).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(5).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(5).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(5).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(5).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("July:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(6).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(6).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(6).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(6).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(6).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(6).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(6).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(6).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(6).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(6).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(6).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(6).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(6).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(6).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("August:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(7).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(7).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(7).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(7).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(7).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(7).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(7).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(7).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(7).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(7).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(7).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(7).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(7).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(7).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("September:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(8).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(8).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(8).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(8).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(8).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(8).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(8).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(8).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(8).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(8).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(8).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(8).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(8).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(8).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("October:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(9).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(9).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(9).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(9).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(9).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(9).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(9).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(9).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(9).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(9).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(9).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(9).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(9).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(9).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("November:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(10).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(10).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `false`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(10).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(10).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(10).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(10).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(10).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(10).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(10).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(10).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(10).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(10).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), false);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-02T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-02T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(10).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(10).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("December:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(11).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(11).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(11).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(11).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(11).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(11).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(11).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(11).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(11).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(11).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(11).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(11).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2101-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2101-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(11).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(11).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

  });

});



/* `Tau#getUtcHours()` & `Tau#setUtcHours()`:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

describe("`Tau#getUtcHours()` & `Tau#setUtcHours()`:", function () {

  /* Tests for the minimum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcHours(0);`:", function () {
    var tau = new Tau(); tau.setUtcHours(0);
    it("… should result in `tau.getUtcHours()` being equal to `0`.", function () {
      assert.strictEqual(tau.getUtcHours(), 0);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for a common value. */
  describe("`var tau = new Tau(); tau.setUtcHours(2);`:", function () {
    var tau = new Tau(); tau.setUtcHours(2);
    it("… should result in `tau.getUtcHours()` being equal to `2`.", function () {
      assert.strictEqual(tau.getUtcHours(), 2);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T02:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T02:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for the maximum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcHours(23);`:", function () {
    var tau = new Tau(); tau.setUtcHours(23);
    it("… should result in `tau.getUtcHours()` being equal to `23`.", function () {
      assert.strictEqual(tau.getUtcHours(), 23);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T23:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T23:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for inferior overflow. */
  describe("`var tau = new Tau(); tau.setUtcHours(- 1);`:", function () {
    var tau = new Tau(); tau.setUtcHours(- 1);
    it("… should result in `tau.getUtcHours()` being equal to `23`.", function () {
      assert.strictEqual(tau.getUtcHours(), 23);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1969-12-31T23:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1969-12-31T23:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for superior overflow. */
  describe("`var tau = new Tau(); tau.setUtcHours(24);`:", function () {
    var tau = new Tau(); tau.setUtcHours(24);
    it("… should result in `tau.getUtcHours()` being equal to `0`.", function () {
      assert.strictEqual(tau.getUtcHours(), 0);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-02T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-02T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

});



/* `Tau#getUtcMinutes()` & `Tau#setUtcMinutes()`:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

describe("`Tau#getUtcMinutes()` & `Tau#setUtcMinutes()`:", function () {

  /* Tests for the minimum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcMinutes(0);`:", function () {
    var tau = new Tau(); tau.setUtcMinutes(0);
    it("… should result in `tau.getUtcMinutes()` being equal to `0`.", function () {
      assert.strictEqual(tau.getUtcMinutes(), 0);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for a common value. */
  describe("`var tau = new Tau(); tau.setUtcMinutes(20);`:", function () {
    var tau = new Tau(); tau.setUtcMinutes(20);
    it("… should result in `tau.getUtcMinutes()` being equal to `20`.", function () {
      assert.strictEqual(tau.getUtcMinutes(), 20);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:20:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:20:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for the maximum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcMinutes(59);`:", function () {
    var tau = new Tau(); tau.setUtcMinutes(59);
    it("… should result in `tau.getUtcMinutes()` being equal to `59`.", function () {
      assert.strictEqual(tau.getUtcMinutes(), 59);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:59:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:59:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for inferior overflow. */
  describe("`var tau = new Tau(); tau.setUtcMinutes(- 1);`:", function () {
    var tau = new Tau(); tau.setUtcMinutes(- 1);
    it("… should result in `tau.getUtcMinutes()` being equal to `59`.", function () {
      assert.strictEqual(tau.getUtcMinutes(), 59);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1969-12-31T23:59:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1969-12-31T23:59:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for superior overflow. */
  describe("`var tau = new Tau(); tau.setUtcMinutes(60);`:", function () {
    var tau = new Tau(); tau.setUtcMinutes(60);
    it("… should result in `tau.getUtcMinutes()` being equal to `0`.", function () {
      assert.strictEqual(tau.getUtcMinutes(), 0);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T01:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T01:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

});



/* `Tau#getUtcSeconds()` & `Tau#setUtcSeconds()`:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

describe("`Tau#getUtcSeconds()` & `Tau#setUtcSeconds()`:", function () {

  /* Tests for the minimum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcSeconds(0);`:", function () {
    var tau = new Tau(); tau.setUtcSeconds(0);
    it("… should result in `tau.getUtcSeconds()` being equal to `0`.", function () {
      assert.strictEqual(tau.getUtcSeconds(), 0);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for a common value. */
  describe("`var tau = new Tau(); tau.setUtcSeconds(20);`:", function () {
    var tau = new Tau(); tau.setUtcSeconds(20);
    it("… should result in `tau.getUtcSeconds()` being equal to `20`.", function () {
      assert.strictEqual(tau.getUtcSeconds(), 20);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:00:20.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:00:20.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for the maximum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcSeconds(59);`:", function () {
    var tau = new Tau(); tau.setUtcSeconds(59);
    it("… should result in `tau.getUtcSeconds()` being equal to `59`.", function () {
      assert.strictEqual(tau.getUtcSeconds(), 59);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:00:59.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:00:59.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for inferior overflow. */
  describe("`var tau = new Tau(); tau.setUtcSeconds(- 1);`:", function () {
    var tau = new Tau(); tau.setUtcSeconds(- 1);
    it("… should result in `tau.getUtcSeconds()` being equal to `59`.", function () {
      assert.strictEqual(tau.getUtcSeconds(), 59);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1969-12-31T23:59:59.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1969-12-31T23:59:59.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for superior overflow. */
  describe("`var tau = new Tau(); tau.setUtcSeconds(60);`:", function () {
    var tau = new Tau(); tau.setUtcSeconds(60);
    it("… should result in `tau.getUtcSeconds()` being equal to `0`.", function () {
      assert.strictEqual(tau.getUtcSeconds(), 0);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:01:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:01:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

});



/* `Tau#getUtcMilliseconds()` & `Tau#setUtcMilliseconds()`:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

describe("`Tau#getUtcMilliseconds()` & `Tau#setUtcMilliseconds()`:", function () {

  /* Tests for the minimum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcMilliseconds(0);`:", function () {
    var tau = new Tau(); tau.setUtcMilliseconds(0);
    it("… should result in `tau.getUtcMilliseconds()` being equal to `0`.", function () {
      assert.strictEqual(tau.getUtcMilliseconds(), 0);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:00:00.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:00:00.000Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for a common value. */
  describe("`var tau = new Tau(); tau.setUtcMilliseconds(222);`:", function () {
    var tau = new Tau(); tau.setUtcMilliseconds(222);
    it("… should result in `tau.getUtcMilliseconds()` being equal to `222`.", function () {
      assert.strictEqual(tau.getUtcMilliseconds(), 222);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:00:00.222Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:00:00.222Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for the maximum accepted value. */
  describe("`var tau = new Tau(); tau.setUtcMilliseconds(999);`:", function () {
    var tau = new Tau(); tau.setUtcMilliseconds(999);
    it("… should result in `tau.getUtcMilliseconds()` being equal to `999`.", function () {
      assert.strictEqual(tau.getUtcMilliseconds(), 999);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:00:00.999Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:00:00.999Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for inferior overflow. */
  describe("`var tau = new Tau(); tau.setUtcMilliseconds(- 1);`:", function () {
    var tau = new Tau(); tau.setUtcMilliseconds(- 1);
    it("… should result in `tau.getUtcMilliseconds()` being equal to `999`.", function () {
      assert.strictEqual(tau.getUtcMilliseconds(), 999);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1969-12-31T23:59:59.999Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1969-12-31T23:59:59.999Z");
    });
    it("… should result in `tau.isValid()` being `true`.", function () {
      assert.strictEqual(tau.isValid(), true);
    });
  });

  /* Tests for superior overflow. */
  describe("`var tau = new Tau(); tau.setUtcMilliseconds(1000);`:", function () {
    var tau = new Tau(); tau.setUtcMilliseconds(1000);
    it("… should result in `tau.getUtcMilliseconds()` being equal to `0`.", function () {
      assert.strictEqual(tau.getUtcMilliseconds(), 0);
    });
    it("… should result in `tau.getUtcIsoString()` being equal to `\"1970-01-01T00:00:01.000Z\"`.", function () {
      assert.strictEqual(tau.getUtcIsoString(), "1970-01-01T00:00:01.000Z");
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
