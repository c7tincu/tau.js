(
  function (context) {
    "use strict";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;
var VERSION = "0.0.1";
var ctorImpl;
var prevTau;

ctorImpl =
  function () {
    /* … */
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api = ctorImpl;

api.VERSION = VERSION;

/* Probably CommonJS. */
if (typeof exports !== "undefined") {
  /* Probably Node.js. */
  if (typeof module !== "undefined" && module.exports) {
    exports = module.exports = api;
  }
  exports["Tau"] = api;
}
/* Probably a browser. */
else {
  prevTau = context["Tau"];
  context["Tau"] = api;
  api.noConflict =
    function () {
      context["Tau"] = prevTau;
      return api;
    };
}



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
)(this);
