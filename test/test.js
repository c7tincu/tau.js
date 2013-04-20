(
  function (context) {
    "use strict";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var P_OBJECT = Object.prototype;



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

describe("`Tau`:", function () {

  it("… should be defined.", function () {
    assert.isNotTypeOf(Tau, "undefined");
  });

  it("… should be a function.", function () {
    assert.strictEqual(P_OBJECT.toString.call(Tau), "[object Function]");
  });

});



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

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

});



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

describe("`Tau.VERSION`:", function () {

  it("… should be defined.", function () {
    assert.isNotTypeOf(Tau.VERSION, "undefined");
  });

  it("… should be a string.", function () {
    assert.strictEqual(P_OBJECT.toString.call(Tau.VERSION), "[object String]");
  });

});



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

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
